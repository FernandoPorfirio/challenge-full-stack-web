import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import SnackbarService from '@/components/SnackbarAlert/service.js'
import SnackbarAlert from '@/components/SnackbarAlert/SnackbarAlert.vue'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdi'
  }
})

const app = createApp(App)

app.config.globalProperties.$snackbar = SnackbarService

app.component('SnackbarAlert', SnackbarAlert)

app.use(vuetify).use(router).use(store).mount('#app')
