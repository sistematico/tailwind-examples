import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/[...all].vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/', name: 'home', component: () => import('../views/home.vue') },
    { path: '/all', name: 'all', component: () => import('../views/all.vue') },
    { path: '/layouts', name: 'layouts', component: () => import('../views/layouts.vue') },
    { path: '/components', name: 'components', component: () => import('../views/components.vue') },
    { path: '/about', name: 'about', component: () => import('../views/about.vue') },
    { path: '/md', name: 'md', component: () => import('../views/md.vue') }
  ]
})

export default router