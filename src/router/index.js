import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomePage from '../views/Home.vue'
import TextPage from '../views/TextPage.vue'
import ImagePage from '../views/ImagePage.vue'
import LoginPages from '../components/LoginPages.vue'
import RegisterPage from '../components/LoginPages.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/text/:id',
      name: 'TextPage',
      component: TextPage,
    },
    {
      path: '/image/:id',
      name: 'ImagePage',
      component: ImagePage,
    },
    {
      path: '/login',
      name: 'LoginPages',
      component: LoginPages,
      meta: {
        requiresAuth: true,
        hideNavbar: true
      }
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage,
      meta: {
        requiresAuth: true,
        hideNavbar: true
      }
    },
  ]
})

export default router
