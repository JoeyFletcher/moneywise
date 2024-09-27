import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import DashboardPage from '@/views/DashboardPage.vue'
import ExpensesPage from '@/views/ExpensesPage.vue' // New Expenses section
import InvestmentsPage from '@/views/InvestmentsPage.vue' // New Investments section
import SavingsPage from '@/views/SavingsPage.vue' // New Savings section

const routes = [
  {
    path: '/',
    redirect: '/home' // Redirect base URL to /home
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage // Ensure this points to HomePage.vue
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage
  },
  {
    path: '/expenses',
    name: 'Expenses',
    component: ExpensesPage // Add a route for the Expenses page
  },
  {
    path: '/investments',
    name: 'Investments',
    component: InvestmentsPage // Add a route for the Investments page
  },
  {
    path: '/savings',
    name: 'Savings',
    component: SavingsPage // Add a route for the Savings page
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
