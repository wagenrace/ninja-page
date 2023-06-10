import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export const path_home = import.meta.env.BASE_URL
export const path_pictures = import.meta.env.BASE_URL + 'pictures'
export const path_about = import.meta.env.BASE_URL + 'about'
export const path_contact = import.meta.env.BASE_URL + 'contact'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: path_home,
      component: Home,
      name: "Home"
    },
    {
      path: path_pictures,
      component: () => import('@/views/Pictures.vue'),
      name: "Pictures"
    },
    {
      path: path_contact,
      component: () => import('@/views/Contact.vue'),
      name: "Contact"
    },
  ],
})