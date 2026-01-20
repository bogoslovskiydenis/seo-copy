import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          name: 'google-site-verification',
          content: '2-0WB6GH45b1Ylj_kWQZaH9XQHE7vGNiBy9x6Ll5Fm4'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://www.spinempirecasinoreview.com/' }
      ]
    }
  },
  ssr: false,
  nitro: {
    preset: 'static'
  }
})
