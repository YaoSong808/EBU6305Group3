import { createApp, inject } from 'vue'
import App from './App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import './styles/dark/css-vars.css'
import 'animate.css'
// import 'animate.css/animate.compat.css'
import 'wow.js/css/libs/animate.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(router)
app.mount('#app')

