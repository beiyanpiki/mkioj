import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'
import { key, store } from '@/store'
import { i18n } from './i18n'
import 'vfonts/FiraCode.css'
import 'vfonts/Lato.css'

createApp(App).use(i18n).use(store, key).use(router).mount('#app')
