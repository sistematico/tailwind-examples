import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/notfound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/', name: 'home', component: () => import('../views/home.vue') },
    { path: '/about', name: 'about', component: () => import('../views/about.vue') }
  ]
})

export default router