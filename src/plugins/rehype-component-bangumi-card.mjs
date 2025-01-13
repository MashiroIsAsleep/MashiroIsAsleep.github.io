/// <reference types="mdast" />
import { h } from 'hastscript'

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

  // Return the anchor that wraps the placeholders
  return h(
    `a#${cardUuid}-card`,
    {
      class: 'card-bangumi fetch-waiting no-styling',
      href: `https://bangumi.tv/user/${user}`,
      target: '_blank',
      rel: 'noopener noreferrer',
      // Pass data attributes for client-side JS
      'data-user': user,
      'data-card-uuid': cardUuid,
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
}
