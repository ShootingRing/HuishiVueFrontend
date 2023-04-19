import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//router and store
import router from './router/index.js'
import store from "./store/index.js";

import 'vfonts/Lato.css'
import $ from 'jquery'
// import 'virtual:windi.css'

//import Identify Components
import SIdentify from './components/SIdentify.vue'

// import UIs
import Naive from 'naive-ui'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//import animations
/*import VueKinesis from 'vue-kinesis'*/
import 'animate.css/animate.min.css'

// import dataV from '@jiaminghi/data-view'
// main.ts中全局引入
import DataVVue3 from '@kjgl77/datav-vue3'
// import vue3videoPlay from 'vue3-video-play' // 引入组件
// import 'vue3-video-play/dist/style.css' // 引入css

const app = createApp(App)

window.jQuery = $
window.$ = $

app.use(store)
app.use(router)
app.use(Naive)
app.use(ElementPlus)
// app.use(dataV)
app.use(DataVVue3)
// app.use(vue3videoPlay)

app.component('SIdentify', SIdentify)

app.$baseurl = 'http://localhost:8080'

app.mount('#app')
