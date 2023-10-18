import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// @ts-ignore
import SvgIcon from '@jamescoyle/vue-icon'

import VueApexCharts from 'vue3-apexcharts'

import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('svg-icon', SvgIcon)
app.use(VueApexCharts)
app.component('EasyDataTable', Vue3EasyDataTable)

app.mount('#app')
