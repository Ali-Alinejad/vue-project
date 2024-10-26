// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Nav from '../components/Nav.vue'
import welcome from '../components/welcome.vue'

const routes = [
  {
    path: '/',
    name: 'Nav',
    component: Nav,
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: welcome,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
