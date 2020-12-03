import { Price } from 'stripe-api-ts'

export function formatStripePrice(price: Price, locale = 'nl-NL') {
  if (price.unit_amount) {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: price.currency.toUpperCase() }).format(
      price.unit_amount / 100
    )
  }
}
