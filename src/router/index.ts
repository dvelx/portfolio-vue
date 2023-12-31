import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { ROUTES_PATHS } from '@/constans/router'
import Home from '@/pages/HomePage.vue'
import Works from '@/pages/WorksPage.vue'
import AboutMePage from '@/pages/AboutMePage.vue'
import SkillsPage from '@/pages/SkillsPage.vue'
import ContactsPage from '@/pages/ContactsPage.vue'
import DonatePage from '@/pages/DonatePage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: Home
    },
    {
      path: ROUTES_PATHS.WORKS,
      name: ROUTES_PATHS.WORKS,
      component: Works
    },
    {
      path: ROUTES_PATHS.ABOUT_ME,
      name: ROUTES_PATHS.ABOUT_ME,
      component: AboutMePage
    },
    {
      path: ROUTES_PATHS.SKILLS,
      name: ROUTES_PATHS.SKILLS,
      component: SkillsPage
    },
    {
      path: ROUTES_PATHS.CONTACTS,
      name: ROUTES_PATHS.CONTACTS,
      component: ContactsPage
    },
    {
      path: ROUTES_PATHS.DONATE,
      name: ROUTES_PATHS.DONATE,
      component: DonatePage
    }
  ]
})

export default router
