import { Price as StripePrice, Product as StripeProduct } from 'stripe-api-ts'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { formatStripePrice } from '../utils/price'

interface Product extends StripeProduct {
  priceFormatted?: string
  price?: StripePrice
}

@Module({ name: 'products', stateFactory: true, namespaced: true })
export default class ProductsModule extends VuexModule {
  list: Array<Product> = []

  @Mutation
  list$assign(payload: Array<Product>) {
    this.list = payload
  }

  @Action({ commit: 'list$assign' })
  async list$fetch() {
    const [{ data: prices }, { data: products }] = await Promise.all([
      this.store.$stripe.getPrices(undefined, { active: true }),
      this.store.$stripe.getProducts(undefined, { active: true }),
    ])

    return products.map((product) => {
      const price = prices.find((price) => price.product === product.id)
      return {
        ...product,
        price,
        ...(price && { priceFormatted: formatStripePrice(price) }),
      }
    })
  }

  get list$getter() {
    return this.list
  }
}
