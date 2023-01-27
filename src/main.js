import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import naive from 'naive-ui'
import {router} from "./common/router.js";
import {createPinia} from "pinia";
import axios from "axios";

// category/list
axios.defaults.baseURL = "http://localhost:8000"

const app = createApp(App)
app.provide("axios", axios)
app.use(naive)
app.use(createPinia())
app.use(router)

app.mount('#app')
