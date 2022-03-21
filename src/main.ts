import { createApp } from 'vue';
import App from './App.vue';
import router from './route';
import store from './store'

import '@/assets/styles/app.scss'; //TW
import 'element-plus/dist/index.css'; //EL
import '@purge-icons/generated'; //icon

const app = createApp(App);
app.use(router).use(store);
app.mount('#app');
