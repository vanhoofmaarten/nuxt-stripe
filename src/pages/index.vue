<template>
  <div class="container">
    <article v-for="product in products" :key="product.id">
      <img :src="product.images[0]" :alt="product.name" width="100" height="100" loading="lazy" />
      <h1>{{ product.name }}</h1>
      <div>{{ product.priceFormatted }}</div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Products } from '../store'

export default Vue.extend({
  async fetch() {
    await Products.list$fetch()
  },
  computed: {
    products() {
      return Products.list$getter
    },
  },
})
</script>
