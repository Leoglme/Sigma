import {meta} from './data/meta'
import website from './data/website.json';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: meta,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/styles/site.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/swiper.ts'
  ],

  publicRuntimeConfig: {
    googleAnalytics: {
      id: website.GA_ID
    }
  },

  googleAnalytics: {
    id: website.GA_ID,
    proxyHeaders: false,
  },
  'google-gtag': {
    id: website.GTAG_ID,
    debug: true
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-gtag',
    '@nuxt/typescript-build',
    '@nuxt/image'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
