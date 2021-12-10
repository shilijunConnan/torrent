import { createApp } from 'vue'

import router from '../../router/students'
import store from '../../store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Students from './Students.vue'


const app = createApp(Students)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#students')


