import '@mdi/font/css/materialdesignicons.css';
import "./assets/css/main.css";


import { createApp } from 'vue'
import App from './App.vue'
import reveal from './directives/reveal'

createApp(App).directive('reveal', reveal).mount('#app')
