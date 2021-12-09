import { createApp } from 'vue'

import routerAdmin from '../../router/admin'
import store from '../../store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Admin from './Admin.vue'

const app = createApp(Admin)
app.use(ElementPlus)
app.use(routerAdmin)
app.use(store)
app.mount('#app')