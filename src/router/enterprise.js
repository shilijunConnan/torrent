import { createRouter, createWebHistory } from 'vue-router'
import Enterprises from '../views/enterprises/Enterprises.vue'
let routes=[
    {
        path: '/enterprises',
        name: 'Enterprises',
        component: Enterprises,
        // redirect:'/admin/login'
    },
    {
        path: '/enterprises/register',
        name: 'EnterprisesRegister',
        component: () => import('../views/enterprises/Register.vue')
    },
    {
        path: '/enterprises/login',
        name: 'EnterprisesLogin',
        component: () => import('../views/enterprises/Login.vue')
    },
    {
        path: '/enterprises/oneResume',
        name: 'EnterprisesOneResume',
        component: () => import('../views/enterprises/resume/OneResume.vue')
    },
    {
        path: '/enterprises/index',
        name: 'EnterprisesIndex',
        component: () => import('../views/enterprises/Index.vue'),
        children:[
            {
                path:'/enterprises/index/recruitment',
                name:'IndexRecruitment',
                component:()=>import('../views/enterprises/Recruitment.vue'),
                children:[
                    {
                        path:'/enterprises/index/recruitment/publishing',
                        name:'IndexRecruitmentPublishing',
                        component:()=>import('../views/enterprises/recruitment/Publishing.vue')
                    },
                    {
                        path:'/enterprises/index/recruitment/published',
                        name:'IndexRecruitmentPublished',
                        component:()=>import('../views/enterprises/recruitment/Published.vue')
                    }
                ]
            },
            {
                path:'/enterprises/index/school',
                name:'IndexSchool',
                component:()=>import('../views/enterprises/School.vue'),
                children:[
                    {
                        path:'/enterprises/index/school/settled',
                        name:'IndexSchoolSettled',
                        component:()=>import('../views/enterprises/school/SchoolSettled.vue')
                    },
                    {
                        path:'/enterprises/index/school/unsettled',
                        name:'IndexSchoolUnsettled',
                        component:()=>import('../views/enterprises/school/SchoolUnsettled.vue')
                    }
                ]
            },
            {
                path:'/enterprises/index/resume',
                name:'IndexResume',
                component:()=>import('../views/enterprises/Resume.vue'),
                children:[
                    {
                        path:'/enterprises/index/resume/unchecked',
                        name:'IndexResumeUnchecked',
                        component:()=>import('../views/enterprises/resume/ResumeUnchecked.vue')
                    },
                    {
                        path:'/enterprises/index/resume/passed',
                        name:'IndexResumePassed',
                        component:()=>import('../views/enterprises/resume/ResumePassed.vue')
                    },
                    {
                        path:'/enterprises/index/resume/failed',
                        name:'IndexResumeFailed',
                        component:()=>import('../views/enterprises/resume/ResumeFailed.vue')
                    },
                ]
            },
            {
                path:'/enterprises/index/process',
                name:'IndexProcess',
                component:()=>import('../views/enterprises/Process.vue'),
                children:[
                    {
                        path:'/enterprises/index/process/skill',
                        name:'IndexProcessSkill',
                        component:()=>import('../views/enterprises/process/ProcessSkill.vue')
                    },
                    {
                        path:'/enterprises/index/process/interview',
                        name:'IndexProcessInterview',
                        component:()=>import('../views/enterprises/process/ProcessInterview.vue')
                    },
                    {
                        path:'/enterprises/index/process/passed',
                        name:'IndexProcessPassed',
                        component:()=>import('../views/enterprises/process/ProcessPassed.vue')
                    },
                    {
                        path:'/enterprises/index/process/failed',
                        name:'IndexProcessFailed',
                        component:()=>import('../views/enterprises/process/ProcessFailed.vue')
                    },
                ]
            },
            {
                path:'/enterprises/index/signatory',
                name:'IndexSignatory',
                component:()=>import('../views/enterprises/Signatory.vue'),
                children:[
                    {
                        path:'/enterprises/index/signatory/under',
                        name:'IndexSignatoryUnder',
                        component:()=>import('../views/enterprises/signatory/SignatoryUnder.vue')
                    },
                    {
                        path:'/enterprises/index/signatory/during',
                        name:'IndexSignatoryDuring',
                        component:()=>import('../views/enterprises/signatory/SignatoryDuring.vue')
                    },
                    {
                        path:'/enterprises/index/signatory/passed',
                        name:'IndexSignatoryPassed',
                        component:()=>import('../views/enterprises/signatory/SignatoryPassed.vue')
                    },
                    {
                        path:'/enterprises/index/signatory/failed',
                        name:'IndexSignatoryFailed',
                        component:()=>import('../views/enterprises/signatory/SignatoryFailed.vue')
                    },
                ]
            },
            {
                path:'/enterprises/index/maybe',
                name:'EnterprisesMaybe',
                component:()=>import('../views/enterprises/Maybe.vue')
            }
        ]
    },
    {
        path:'/enterprises/one',
        name:'One',
        component:()=>import('../views/enterprises/signatory/One.vue')
    }
]
const routerEnterprises = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default routerEnterprises