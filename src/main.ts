import './assets/main.css'
import { plugin, defaultConfig } from "@formkit/vue";

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'

const app = createApp(App)

app.use(
  createRouter({
    history: createWebHistory()
  })
)
app.use(plugin, defaultConfig);

// Add Scroll Reveal
const script = document.createElement('script');
script.src = 'https://unpkg.com/scrollreveal';
document.body.appendChild(script);

app.mount('#app');
