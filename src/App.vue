<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log(import.meta.env.MODE)
})
</script>
<template>
  <router-view />
</template>