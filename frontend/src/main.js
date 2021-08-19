import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import './assets/dashboard.css'
import { FontAwesomeIcon } from './plugins/font-awesome';
import "bootstrap"

import router from './router'
import store from './store'

const app = createApp(App)


app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(store)
app.mount('#app')



