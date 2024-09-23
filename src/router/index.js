import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import DashboardPage from '../views/DashboardPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/dashboard', name: 'Dashboard', component: DashboardPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
