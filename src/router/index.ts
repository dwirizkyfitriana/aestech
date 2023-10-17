import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/branches',
      name: 'Branches',
      component: () => import('../views/BranchesView.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/ProfileView.vue')
    }
  ]
})

export default router
