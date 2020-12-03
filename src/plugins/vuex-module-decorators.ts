import { Store } from 'vuex'
import { config } from 'vuex-module-decorators'

// Set rawError to true by default on all @Action decorators
config.rawError = true

declare module 'vuex-module-decorators/dist/types' {
  interface VuexModule {
    // @ts-ignore
    store: Store<S>
  }
}
