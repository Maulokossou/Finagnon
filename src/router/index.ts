import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/AccueilView.vue'
import Dashboard from '../views/DashboardView.vue'
import Movie from '../views/MovieView.vue'
import Connexion from '../views/ConnexionView.vue'
import Enregistrement from '../views/EnregistrementView.vue'
import DashboardContainer from '../views/layout/DashboardContainerLayout.vue'
import Cartoons from '../views/CartoonsView.vue'
import Serie from '../views/SeriesView.vue'
import Documentary from '../views/DocumentaryView.vue'
import Reality from '../views/RealityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/dashboardcontainer',
      name: 'dashboardcontainer',
      component: DashboardContainer,
      children: [
        {
          path: '/movie',
          name: 'movie',
          component: Movie,
        },
        {
          path: '/cartoons',
          name: 'cartoons',
          component: Cartoons,
        },
        {
          path: '/documentary',
          name: 'documentary',
          component:Documentary,
        },
        {
          path: '/reality',
          name: 'reality',
          component: Reality,
        },
        {
          path: '/serie',
          name: 'serie',
          component: Serie,
        },
      ]
    },
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/movie',
          name: 'movie',
          component: Movie,
        },
      ]
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: Connexion
    },
    {
      path: '/enregistrement',
      name: 'enregistrement',
      component: Enregistrement
    },
  ]
})

export default router
