<script setup>
import { ref } from 'vue'

let showMenu = ref(false)
</script>
<template>
  <nav class="sticky top-0 z-10 bg-base-300 p-3 mb-4">
    <div class="container mx-auto"><!-- Container -->
      <div class="flex flex-col md:flex-row md:justify-between items-center">
        <div class="flex justify-between items-center w-full">
          <div class="flex flex-nowrap">
            <router-link to="/" class="text-lg font-bold btn btn-ghost">
              <img src="/tailwind.png" alt="Tailwind Examples" class="h-10 mr-2">
              Tailwind Examples
            </router-link>
          </div>

          <button class="btn btn-ghost cursor-pointer bg-transparent outline-none focus:outline-none md:hidden" type="button" @click="showMenu = !showMenu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
        </div>

        <div :class="{ 'hidden': !showMenu, 'flex': showMenu }" class="md:flex items-center"><!-- Submenu -->
          <div class="flex items-stretch">
            <router-link to="/" class="btn btn-ghost rounded-btn">Início</router-link>
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost rounded-btn">Exemplos</label>
              <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-200 rounded-box w-40 mt-5">
                <li><router-link to="/layouts">Layouts</router-link></li>
                <li><router-link to="/components">Componentes</router-link></li>
              </ul>
            </div>
            <router-link to="/about" class="btn btn-ghost rounded-btn">Sobre</router-link>
          </div>
        </div><!-- Fim Submenu -->
      </div>
    </div><!-- Fim Container -->
  </nav>
</template>
