import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import Donation from '@/components/Donation.vue'
import Impact from '@/components/Impact.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/about',
    component: AboutView
  },
  {
    path: '/contact',
    component: ContactView
  },
  {
    path: '/donation',
    component: Donation
  },
  {
    path: '/impact',
    component: Impact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router