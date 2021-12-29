import { createRouter, createWebHistory } from 'vue-router'
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
  {path: '/students/index',name: 'StudentIndex',component: Index},
  {path:'/students/login',name:'StudentLogin',component:Login},
  {path:'/students/hall',name:'StudentHall',component:()=>import('../views/students/Hall.vue')},
  {path:'/students/job',name:'StudentJob',component:()=>import('../views/students/Job.vue')},
  {path:'/students/company',name:'StudentCompany',component:()=>import('../views/students/Company.vue')},
  {path:'/students/oneResume',name:'StudentOneResume',component:()=>import('../views/students/OneResume.vue')},
  {path:'/students/education',name:'StudentEducation',component:()=>import('../views/students/Education.vue')},
  {
    path:'/students/home',
    name:'StudentHome',component:()=>import('../views/students/Home.vue'),
    children:[
    {path:'/students/home/resume',name:'Resume',component:()=>import('../views/students/Resume.vue')},
    {path:'/students/home/post',name:'Post',component:()=>import('../views/students/Post.vue'),children:[
      {path:'/students/home/post/delivered',name:'MainPostDelivered',component:()=>import('../components/students/mains/MainPostDelivered.vue')}
      ,{path:'/students/home/post/checked',name:'MainPostChecked',component:()=>import('../components/students/mains/MainPostChecked.vue')}
      ,{path:'/students/home/post/refused',name:'MainPostRefused',component:()=>import('../components/students/mains/MainPostRefused.vue')}
      ,{path:'/students/home/post/interview',name:'MainPostInterview',component:()=>import('../components/students/mains/MainPostInterview.vue')}
    ]},
    {path:'/students/home/process',name:'Process',component:()=>import('../views/students/Process.vue'),children:[
      {path:'/students/home/process/pre',name:'MainInterviewPre',component:()=>import('../components/students/mains/MainInterviewPre.vue')}
      ,{path:'/students/home/process/ing',name:'MainInterviewIng',component:()=>import('../components/students/mains/MainInterviewIng.vue')}
      ,{path:'/students/home/process/ed',name:'MainInterviewEd',component:()=>import('../components/students/mains/MainInterviewEd.vue')}
    ]},
    {path:'/students/home/favorite',name:'Favorite',component:()=>import('../views/students/Favorite.vue'),children:[
      {path:'/students/home/favorite/position',name:'MainMaybePosition',component:()=>import('../components/students/mains/MainMaybePosition.vue')},
      {path:'/students/home/favorite/company',name:'MainMaybeCompany',component:()=>import('../components/students/mains/MainMaybeCompany.vue')},
    ]},
    {path:'/students/home/maybe',name:'Maybe',component:()=>import('../views/students/Maybe.vue')},
    
  ]

  },
  
  
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
