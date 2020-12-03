/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import ProductsModule from './products'

let Products: ProductsModule

const initializer = (store: Store<any>) => {
  Products = getModule(ProductsModule, store)
}

export const plugins = [initializer]

export { Products }
