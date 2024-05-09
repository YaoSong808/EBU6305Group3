import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Category from '../views/Category.vue'
import InfoView from '../views/InfoView.vue'
import TypesView from '../views/TypesView.vue'
import TheoryView from '../views/TheoryView.vue'
import MoreView from '../views/MoreView.vue'
import DetailView from '../views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cate',
      name: 'cate',
      component: Category
    },
    {
      path: '/info',
      name: 'info',
      component: InfoView
    },
    {
      path: '/types',
      name: 'types',
      component: TypesView
    },
    {
      path: '/theory',
      name: 'theory',
      component: TheoryView,
    },
    {
      path: '/more',
      name: 'more',
      component: MoreView
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView
    },
  ]
})

export default router
