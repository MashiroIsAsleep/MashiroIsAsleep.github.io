/// <reference types="mdast" />
import { h } from 'hastscript'

// Simple in-memory cache
const bangumiCache = {}

/**
 * Creates a Bangumi Card component.
 *
 * @param {Object} properties - The properties for the component.
 * @param {string} properties.user - The Bangumi user ID or username.
 * @param {import('mdast').RootContent[]} children - The children elements of the component.
 * @returns {import('mdast').Parent} The created Bangumi Card component.
 */
export function BangumiCardComponent(properties, children) {
  // Ensure leaf directive (no children allowed)
  if (Array.isArray(children) && children.length !== 0) {
    return h('div', { class: 'hidden' }, [
      'Invalid directive. ("bangumi" must be a leaf type "::bangumi{user="username"}")',
    ])
  }

  // Validate user property
  if (!properties.user) {
    return h(
      'div',
      { class: 'hidden' },
      'Invalid user. ("user" attribute must be provided for a Bangumi card")',
    )
  }

  const user = properties.user
  const cardUuid = `BC${Math.random().toString(36).slice(-6)}`

  // Create placeholders
  const nAvatar = h(`div#${cardUuid}-avatar`, { class: 'bc-avatar' })
  const nNickname = h(
    `div#${cardUuid}-nickname`,
    { class: 'bc-nickname' },
    'Loading…',
  )
  const nUsername = h(
    `span#${cardUuid}-username`,
    { class: 'bc-username' },
    `@${user}`,
  )
  const nSign = h(`div#${cardUuid}-sign`, { class: 'bc-sign' }, 'Loading…')
  const nUserGroup = h(
    `div#${cardUuid}-usergroup`,
    { class: 'bc-usergroup' },
    'Loading…',
  )
  const nUserId = h(
    `div#${cardUuid}-userid`,
    { class: 'bc-userid' },
    'Loading…',
  )

  // Create the card element
  const cardEl = h(
    `a#${cardUuid}-card`,
    {
      class: 'card-bangumi fetch-waiting no-styling',
      href: `https://bangumi.tv/user/${user}`,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    [
      // Left Side: Avatar and User Details
      h('div', { class: 'bc-user-card' }, [
        nAvatar,
        h('div', { class: 'bc-user-details' }, [
          // Combine Nickname and Username
          h('div', { class: 'bc-name-container' }, [nNickname, nUsername]),
          // Bio below
          nSign,
        ]),
      ]),
      // Right Side: User Group and User ID
      h('div', { class: 'bc-additional-info' }, [nUserGroup, nUserId]),
    ],
  )

  // Append the card to the DOM (Assuming the parent context handles insertion)
  // You might need to adjust this part based on your actual setup
  // For example, using a virtual DOM library or directly manipulating the real DOM
  // Here, we'll assume you're using a function to insert it into the page
  // insertIntoPage(cardEl) // Placeholder function

  // Function to fetch and populate data
  async function fetchAndPopulate() {
    // Check if data is already cached
    if (bangumiCache[user]) {
      populateData(bangumiCache[user])
      return
    }

    try {
      console.log(`[BANGUMI-CARD] Fetching data for user: ${user}`)
      const response = await fetch(`https://api.bgm.tv/v0/users/${user}`)
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      const data = await response.json()
      // Cache the data
      bangumiCache[user] = data
      console.log(`[BANGUMI-CARD] Data fetched for user: ${user}`, data)
      populateData(data)
    } catch (err) {
      console.error(`[BANGUMI-CARD] Error loading data for user: ${user}`, err)
      handleError()
    }
  }

  // Function to populate DOM elements with fetched data
  function populateData(data) {
    // Update Avatar
    const avatarUrl =
      data.avatar &&
      (data.avatar.large || data.avatar.medium || data.avatar.small)
    if (avatarUrl) {
      const avatarEl = document.getElementById(`${cardUuid}-avatar`)
      if (avatarEl) {
        avatarEl.style.backgroundImage = `url(${avatarUrl})`
        avatarEl.style.backgroundColor = 'transparent'
      }
    }

    // Update Nickname
    const nickname = data.nickname || user
    const nicknameEl = document.getElementById(`${cardUuid}-nickname`)
    if (nicknameEl) {
      nicknameEl.innerText = nickname
    }

    // Update Username
    const usernameEl = document.getElementById(`${cardUuid}-username`)
    if (usernameEl) {
      usernameEl.innerText = `@${data.username}`
    }

    // Update Sign (Bio)
    const sign = data.sign || 'No signature available'
    const signEl = document.getElementById(`${cardUuid}-sign`)
    if (signEl) {
      signEl.innerText = sign
    }

    // Update User Group
    const userGroup = data.user_group || 'N/A'
    const userGroupEl = document.getElementById(`${cardUuid}-usergroup`)
    if (userGroupEl) {
      userGroupEl.innerText = `Groups attended: ${userGroup}`
    }

    // Update User ID
    const userId = data.id || 'N/A'
    const userIdEl = document.getElementById(`${cardUuid}-userid`)
    if (userIdEl) {
      userIdEl.innerText = `ID: ${userId}`
    }

    // Remove fetch-waiting class once data is loaded
    if (cardEl) {
      cardEl.classList.remove('fetch-waiting')
    }

    console.log(`[BANGUMI-CARD] Loaded card for ${user} | ${cardUuid}.`)
  }

  // Function to handle errors
  function handleError() {
    if (cardEl) {
      cardEl.classList.add('fetch-error')
    }
    const nicknameEl = document.getElementById(`${cardUuid}-nickname`)
    if (nicknameEl) {
      nicknameEl.innerText = 'Error loading user'
    }
    const signEl = document.getElementById(`${cardUuid}-sign`)
    if (signEl) {
      signEl.innerText = ''
    }
    const userGroupEl = document.getElementById(`${cardUuid}-usergroup`)
    if (userGroupEl) {
      userGroupEl.innerText = ''
    }
    const userIdEl = document.getElementById(`${cardUuid}-userid`)
    if (userIdEl) {
      userIdEl.innerText = ''
    }
  }

  // Invoke the data fetching function
  fetchAndPopulate()

  return cardEl
}
