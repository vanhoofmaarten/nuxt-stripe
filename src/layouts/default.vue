<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-black text-white py-4 px-8">Nuxt & Stripe API</header>
    <div class="py-4 px-8 flex-grow">
      <Nuxt />
    </div>
    <footer class="bg-black text-white py-4 px-8">&copy; ROYCE {{ year }}</footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    year() {
      const date = new Date()
      return date.getFullYear()
    },
  },
})
</script>
