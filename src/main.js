import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Icon } from '@iconify/vue'

createApp(App).component('Icon', Icon).use(store).use(router).mount('#app')
