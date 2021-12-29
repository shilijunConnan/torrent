import { createApp } from 'vue'

import routerEnterprise from '../../router/enterprise'
// import store from '../../store/admin'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import CKEditor from '@ckeditor/ckeditor5-vue';
 


import Enterprises from './Enterprises.vue'

const app = createApp(Enterprises)
app.use(ElementPlus)
app.use(routerEnterprise)
app.use( CKEditor );
// app.use(store)
app.mount('#app')