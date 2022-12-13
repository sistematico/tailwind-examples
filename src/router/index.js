export const routes = [
  { path: '/', component: () => import(/* webpackChunkName: "home" */ '../views/home.vue') },
  { path: '/layouts', component: () => import(/* webpackChunkName: "layouts" */ '../views/layouts.vue') },
  { path: '/:pathMatch(.*)*', component: () => import(/* webpackChunkName: "notfound" */ '../views/notfound.vue') }
]