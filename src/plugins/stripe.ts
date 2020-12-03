import { Plugin } from '@nuxt/types'
import * as stripeApi from 'stripe-api-ts'
import { optimistic } from 'oazapfts'

const api = optimistic(stripeApi)

const fetchInterceptor = (...args: [input: RequestInfo, init?: RequestInit | undefined]): Promise<Response> =>
  new Promise((resolve, reject) => {
    const fetch = process.server ? global.fetch(...args) : window.fetch(...args)
    fetch
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })

const stripeApiPlugin: Plugin = (context, inject) => {
  api.defaults.baseUrl = context.$config.stripeApiUrlInternally
  api.defaults.fetch = fetchInterceptor
  inject('stripe', api)
}

export default stripeApiPlugin

declare module 'vue/types/vue' {
  interface Vue {
    $stripe: typeof api
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $stripe: typeof api
  }
  interface Context {
    $stripe: typeof api
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $stripe: typeof api
  }
}
