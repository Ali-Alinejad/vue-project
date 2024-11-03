import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueParticles from 'vue-particles'

const app = createApp(App)

app.use(router)
app.use(VueParticles)

app.mount('#app')
