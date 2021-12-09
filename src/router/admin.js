import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../views/admin/Admin.vue'
import MainResumePerson from '../components/students/mains/MainResumePerson.vue'
let routes =[
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
    
    
  ]

const routerAdmin = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default routerAdmin