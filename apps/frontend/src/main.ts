import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerLayouts } from '@/layouts/register';
import router from './routes'
// import stores from './stores'
import { createPinia } from "pinia";

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app');

registerLayouts(app);