import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About/AboutView.vue')
    },
    {
      path: '/comments',
      name: 'comments',
      component: () => import('../views/Comments/Comments.vue')
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('../views/Photos/PhotosView.vue')
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('../views/Todos/TodosView.vue')
    }
  ]
})

export default router
