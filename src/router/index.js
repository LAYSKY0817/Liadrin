import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomePage from '../views/Home.vue'
import TextPage from '../views/TextPage.vue'
import ImagePage from '../views/ImagePage.vue'
import LoginPages from '../views/LoginPages.vue'
import RegisterPage from '../views/LoginPages.vue'
import ContactPage from '../views/ContactPage.vue';
import DownloadPage from '../views/DownloadPage.vue';
import FaqPage from '../views/FaqPage.vue';
import IntroductionPage from '../views/IntroductionPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savePosition)
  {
    if (savePosition) {
      return savePosition;
    } else {
      return { top: 0, behavior: 'auto' };
    }
  },
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
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage,
    },
    {
      path: '/download',
      name: 'DownloadPage',
      component: DownloadPage,

    },
    {
      path: '/faq',
      name: 'FaqPage',
      component: FaqPage,
    },
    {
      path: '/introduction',
      name: 'IntroductionPage',
      component:IntroductionPage,
    }
  ]
})

export default router
