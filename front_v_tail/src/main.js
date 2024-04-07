import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


// createApp(App).mount('#app')
//vue-routerを使うため↓の2行に変更します。
import router from "./router/router.js"; 
createApp(App).use(router).mount("#app"); 
