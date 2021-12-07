import { createApp } from 'vue'

import router from '../../router'
import store from '../../store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Schools from './Schools.vue'

const app = createApp(Schools)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')