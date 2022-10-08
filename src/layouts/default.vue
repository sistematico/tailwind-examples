<script setup>
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';
</script>
<template>
  <Navbar />
  <main class="container mx-auto content">
    <router-view/>
  </main>
  <Footer />
</template>