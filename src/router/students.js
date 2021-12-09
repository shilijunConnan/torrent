import { createRouter, createWebHistory } from 'vue-router'
// import students_router from './students_router'
import Students from '../views/students/Students.vue'
import Index from '../views/students/Index.vue'
import Login from '../views/students/Login.vue'
let routes =[
  {
    path: '/students',
    name: 'Students',
    component: Students,
    redirect:'/students/index',
  },
  {path: '/students/index',name: 'Index',component: Index},
  {path:'/students/login',name:'Login',component:Login},
  {path:'/students/hall',name:'Hall',component:()=>import('../views/students/Hall.vue')},
  {path:'/students/education',name:'Education',component:()=>import('../views/students/Education.vue')},
  {
    path:'/students/home',
    name:'Home',component:()=>import('../views/students/Home.vue'),
    redirect:'/students/resume',
    children:[
    
    {path:'/students/resume',name:'Resume',component:()=>import('../views/students/Resume.vue')}
  ]

  },
  
  
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
