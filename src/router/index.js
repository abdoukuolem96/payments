import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BillingCreate from '../views/Billing/Create.vue'
// import BillingDetails from '../views/Billing/Details.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/create-billing',
    name: 'BillingCreate',
    component: BillingCreate,
  },
  // {
  //   path: '/details/:id',
  //   name: 'BillingDetails',
  //   component: BillingDetails,
  //   props: true,
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
