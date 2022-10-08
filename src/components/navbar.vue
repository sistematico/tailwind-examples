<script setup>
import { ref } from 'vue'

let showMenu = ref(false)
</script>
<template>
  <nav class="sticky top-0 z-10 flex flex-wrap items-center justify-between px-2 py-3 mb-2 bg-base-100 shadow-xl">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
        <router-link to="/" class="inline-block mr-4 py-2 btn btn-ghost uppercase text-xl">Tailwind Examples</router-link>
        
        <button 
          class="cursor-pointer text-md px-3 py-1 bg-transparent block md:hidden outline-none focus:outline-none
          btn btn-ghost" 
          type="button" 
          @click="showMenu = !showMenu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
      </div>
      <div 
        :class="{ 'hidden': !showMenu, 'flex': showMenu }" 
        class="items-center md:flex md:flex-grow"
      >
        <ul class="flex flex-col ml-auto list-none md:flex-row">
          <li class="nav-item">
            <router-link 
              to="/" 
              class="px-3 py-2 flex items-center font-bold leading-snug text-white hover:opacity-75 btn btn-ghost uppercase text-md"
            >
              Início
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              to="/about" 
              class="px-3 py-2 flex items-center font-bold leading-snug text-white hover:opacity-75 btn btn-ghost uppercase text-md"
            >
              Sobre
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              to="/404" 
              class="px-3 py-2 flex items-center font-bold leading-snug text-white hover:opacity-75 btn btn-ghost uppercase text-md"
            >
              404
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
