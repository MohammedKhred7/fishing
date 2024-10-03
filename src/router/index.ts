import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition)
        }
        if (to.hash) {
          resolve({ el: to.hash, behavior: 'smooth' })
        }
        resolve({ left: 0, top: 0 })
      }, 50)
    })
  },
  routes: [
    {
      path: '/',
      name: 'Fishs',
      component: () => import('../views/index.vue')
    },
    {
      path: '/comapany',
      name: 'Comapany',
      component: () => import('../views/comapany.vue')
    },
    {
      path: '/administrativeStaff',
      name: 'Administrative Staff',
      component: () => import('../views/administrativeStaff.vue')
    },
    {
      path: '/structure',
      name: 'Structure',
      component: () => import('../views/structure.vue')
    },
    {
      path: '/quality',
      name: 'Quality Assurance',
      component: () => import('../views/quality.vue')
    },
    {
      path: '/certificates',
      name: 'certificates',
      component: () => import('../views/certificates.vue')
    },
    {
      path: '/facilities',
      name: 'Facilities',
      component: () => import('../views/facilities.vue')
    },
    {
      path: '/objectives',
      name: 'Objectives',
      component: () => import('../views/objectives.vue')
    },
    {
      path: '/vision',
      name: 'Vision',
      component: () => import('../views/vision.vue')
    },
    {
      path: '/products/:id',
      name: 'Products',
      component: () => import('../views/products.vue')
    },
    {
      path: '/word',
      name: 'Word',
      component: () => import('../views/word.vue')
    },
    {
      path: "/:pathMatch(.*)",
      name: "NotFound",
      component: () => import('../views/notFound.vue'),
      meta: {
        requiresAuth: false
      }
    }
  ]
})

export default router
