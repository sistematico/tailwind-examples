import Home from '../views/home.vue'
import NotFound from '../views/notfound.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

