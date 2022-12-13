import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './router'
import App from './App.vue'
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import './assets/css/app.css'

const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes })

createApp(App).use(router).use(Vue3Lottie).mount('#app')