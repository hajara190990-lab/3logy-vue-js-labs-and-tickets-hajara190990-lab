import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { 
    path: '/admin', 
    component: AdminView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Temporary global state
export const globalState = { isAuthenticated: false }

// Navigation guard
router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !globalState.isAuthenticated) {
    alert("Stop! You must log in first.")
    return { path: '/login' }
  }
})

export default router
