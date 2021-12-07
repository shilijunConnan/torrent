import { createRouter, createWebHistory } from 'vue-router'
// import students_router from './students_router'
import Students from '../views/students/Students.vue'
import Home from '../views/students/Home.vue'
import Login from '../views/students/Login.vue'
let routes =[
  {
    path: '/students',
    name: 'Students',
    component: Students,
    redirect:'/students/home',
    children:[
      {path: '/students/home',name: 'Home',component: Home},
      {path:'/students/login',name:'Login',component:Login},
      {path:'/students/hall',name:'Hall',component:()=>import('../views/students/Hall.vue')}
    ]
  }
  
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
