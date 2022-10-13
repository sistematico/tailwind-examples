<script setup>
defineProps({ open: Boolean })
</script>
<template>
  <div 
    class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" 
    :class="{ 'hidden': !open }"  
  >
    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      <li>
        <router-link
          to="/"
          class="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
        >
         Início 
        </router-link>
      </li>
      <li>
        <router-link 
          to="/layouts" 
          class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
        >
          Layouts
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
a.router-link-active.router-link-exact-active {
  @apply text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white;
}
</style>
