import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHistory} from 'vue-router';
import routes from './views/routes';

createApp(App)
    .use(createRouter({
        history: createWebHistory(),
        routes
    }))
    .mount('#app')
