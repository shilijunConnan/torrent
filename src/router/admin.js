import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../views/admin/Admin.vue'
let routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    // redirect:'/admin/login'
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('../views/admin/Login.vue')
  },
  {
    path: '/admin/register',
    name: 'AdminRegister',
    component: () => import('../views/admin/Register.vue')
  },
  {
    path: '/admin/school/check',
    name: 'CheckSchool',
    component: () => import('../views/admin/school/Check.vue')
  },
  {
    path: '/admin/company/check',
    name: 'CheckCompany',
    component: () => import('../views/admin/company/Check.vue')
  },
  {
    path:'/admin/log/check',
    name:'CheckLog',
    component:()=>import('../views/admin/log/LogContainer.vue'),
    children:[
      {
        path: '/admin/log/check/click',
        name: 'LogClick',
        component: () => import('../views/admin/log/LogClick.vue')
      },
    ]
  },
  {
    path: '/admin/index',
    name: 'Index',
    component: () => import('../views/admin/Index.vue'),
    children: [
      {
        path: '/admin/index/school',
        name: 'School',
        component: () => import('../views/admin/School.vue'),
        redirect: '/admin/index/school/under',
        children: [
          {
            path: '/admin/index/school/under',
            name: 'UnderSchool',
            component: () => import('../views/admin/school/Under.vue')
          },
          {
            path: '/admin/index/school/pass',
            name: 'PassSchool',
            component: () => import('../views/admin/school/Pass.vue')
          },
          {
            path: '/admin/index/school/failed',
            name: 'FailedSchool',
            component: () => import('../views/admin/school/Failed.vue')
          }
        ]
      },
      {
        path: '/admin/index/company',
        name: 'Company',
        component: () => import('../views/admin/Company.vue'),
        children: [
          {
            path: '/admin/index/company/under',
            name: 'UnderCompany',
            component: () => import('../views/admin/company/Under.vue')
          },
          {
            path: '/admin/index/company/pass',
            name: 'PassCompany',
            component: () => import('../views/admin/company/Pass.vue')
          },
          {
            path: '/admin/index/company/failed',
            name: 'FailedCompany',
            component: () => import('../views/admin/company/Failed.vue')
          }
        ]
      },
      {
        path: '/admin/index/complaints',
        name: 'Complaints',
        component: () => import('../views/admin/Complaints.vue'),
        children: [
          {
            path: '/admin/index/complaints/checking',
            name: 'CheckingComplaints',
            component: () => import('../views/admin/complaints/Checking.vue')
          },
          {
            path: '/admin/index/complaints/checked',
            name: 'CheckedComplaints',
            component: () => import('../views/admin/complaints/Checked.vue')
          }
        ]
      },
      {
        path: '/admin/index/handle',
        name: 'Handle',
        component: () => import('../views/admin/Handle.vue'),
        children:[
          {
            path: '/admin/index/handle/studentContainer',
            name: 'HandleStudentContainer',
            component: () => import('../views/admin/handle/HandleStudentContainer.vue'),
            children:[
              {
                path:'/admin/index/handle/studentsContainer/handleStudentNormal',
                name:'HandleStudentNormal',
                component:()=>import('../views/admin/handle/student/Normal.vue')
              },
              {
                path:'/admin/index/handle/studentsContainer/handleStudentRestricted',
                name:'HandleStudentRestricted',
                component:()=>import('../views/admin/handle/student/Restricted.vue')
              },
              {
                path:'/admin/index/handle/studentsContainer/handleStudentBanned',
                name:'HandleStudentBanned',
                component:()=>import('../views/admin/handle/student/Banned.vue')
              }
            ]
          },
          {
            path: '/admin/index/handle/schoolContainer',
            name: 'HandleSchoolContainer',
            component: () => import('../views/admin/handle/HandleSchoolContainer.vue'),
            children:[
              {
                path:'/admin/index/handle/schoolContainer/handleSchoolNormal',
                name:'HandleSchoolNormal',
                component:()=>import('../views/admin/handle/school/Normal.vue')
              },
              {
                path:'/admin/index/handle/schoolContainer/handleSchoolRestricted',
                name:'HandleSchoolRestricted',
                component:()=>import('../views/admin/handle/school/Restricted.vue')
              },
              {
                path:'/admin/index/handle/schoolContainer/handleSchoolBanned',
                name:'HandleSchoolBanned',
                component:()=>import('../views/admin/handle/school/Banned.vue')
              }
            ]
          },
          {
            path: '/admin/index/handle/companyContainer',
            name: 'HandleCompanyContainer',
            component: () => import('../views/admin/handle/HandleCompanyContainer.vue'),
            children:[
              {
                path:'/admin/index/handle/companyContainer/handleCompanyNormal',
                name:'HandleCompanyNormal',
                component:()=>import('../views/admin/handle/company/Normal.vue')
              },
              {
                path:'/admin/index/handle/companyContainer/handleCompanyRestricted',
                name:'HandleCompanyRestricted',
                component:()=>import('../views/admin/handle/company/Restricted.vue')
              },
              {
                path:'/admin/index/handle/companyContainer/handleCompanyBanned',
                name:'HandleCompanyBanned',
                component:()=>import('../views/admin/handle/company/Banned.vue')
              }
            ]
          }
        ]
      },
      {
        path: '/admin/index/log',
        name: 'Log',
        component: () => import('../views/admin/Log.vue'),
        children:[
          {
            path:'/admin/index/log/student',
            name:'LogStudent',
            component:()=>import('../views/admin/log/LogStudent.vue')
          },
          {
            path:'/admin/index/log/school',
            name:'LogSchool',
            component:()=>import('../views/admin/log/LogSchool.vue')
          },
          {
            path:'/admin/index/log/company',
            name:'LogCompany',
            component:()=>import('../views/admin/log/LogCompany.vue')
          }
        ]
      }
    ]
  },


]

const routerAdmin = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default routerAdmin