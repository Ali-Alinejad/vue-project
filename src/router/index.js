// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/main.vue'

const routes = [
  {},
  {
    path: '/',
    name: 'main',
    component: Main,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
