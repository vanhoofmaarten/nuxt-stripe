import { ClientRequest } from 'http'

export default {
  '/api/stripe': {
    target: 'https://api.stripe.com',
    pathRewrite: {
      '^/api/stripe': '',
    },
    onProxyReq(proxyReq: ClientRequest) {
      const key = Buffer.from(process.env.STRIPE_API_KEY || '', 'utf-8').toString('base64')
      proxyReq.setHeader('Authorization', `Basic ${key}`)
    },
    logLevel: 'debug',
    logProvider: () => ({
      log: console.log,
      debug: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error,
    }),
  },
}
