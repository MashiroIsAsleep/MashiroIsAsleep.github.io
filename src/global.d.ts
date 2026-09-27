import type Swup from '@swup/astro/client/Swup'

declare global {
  const arkpets: typeof import('../public/arkpets/globals').default

  interface Window {
    swup: Swup
  }
}
