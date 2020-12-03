import dotenv from 'dotenv'
import { NuxtConfig } from '@nuxt/types'
import { head, proxy } from './config'

dotenv.config()

const config: NuxtConfig = {
  head,

  srcDir: 'src',

  css: [],

  plugins: ['~/plugins/stripe', '~/plugins/vuex-module-decorators'],

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/stylelint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/proxy'],

  build: {},

  proxy,

  publicRuntimeConfig: {
    stripeApiUrlInternally: process.env.STRIPE_API_URL_INTERNALLY,
  },
}

export default config
