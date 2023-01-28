import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreatePost from '../views/CreatePost.vue'
import Details from '../views/Details.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/createPost',
    name: 'createPost',
    component: CreatePost
  },
  {
    path: '/post/:id',
    name: 'details',
    component: Details,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
