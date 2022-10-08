<script setup>
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
</script>
<template>
  <Navbar />
  <!-- <div class="sm:flex container p-5 mx-auto content justify-between flex-wrap"> -->
  <main class="container mx-auto content">
    <router-view/>
  </main>
  <Footer />
</template>