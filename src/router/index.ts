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
import ListedeLecture from "../views/ListedeLectureView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/dashboard',
      name: 'dashboard_index',
      component: Dashboard
    },
    {
      path: '/dashboard/films',
      name: 'dashboard_movies',
      component: Movie
    },
    {
      path: '/dashboard/cartoons',
      name: 'dashboard_cartoons',
      component: Cartoons
    },
    {
      path: '/dashboard/documentary',
      name: 'dashboard_documentary',
      component: Documentary
    },
    {
      path: '/dashboard/serie',
      name: 'dashboard_serie',
      component: Serie
    },
    {
      path: '/dashboard/reality',
      name: 'dashboard_reality',
      component: Reality
    },
    {
      path: '/dashboard/listedelecture',
      name: 'dashboard_listedelecture',
      component: ListedeLecture
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
