<script setup>
import { computed } from 'vue'
import Header from '../components/header.vue'
import Hero from '../components/hero.vue'
import Testimonials from '../components/testimonials.vue'
import Features from '../components/features.vue'
import FeaturesTwo from '../components/features-two.vue'
import Footer from '../components/footer.vue'

const comp = computed(() => {
  return { 
    app: import.meta.env.VITE_APP_NAME,
    ano: new Date().getFullYear()
  } 
})
</script>
<template>
  <Header :app-name="comp.app" />
  <template v-if="$route.path === '/'">
    <Hero />
    <!-- <Testimonials /> -->
    <!-- <Features /> -->
    <!-- <FeaturesTwo /> -->
  </template>  

  <section class="pt-20 lg:pt-28">
    <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
      <slot />
    </div>
  </section> 

  <Footer :dados="comp" />
</template>