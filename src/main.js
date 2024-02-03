import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import authModule from './store/auth';


const store = createStore({
  modules: {
    auth: authModule,
  }
})

store.dispatch('auth/loadAuthToken');

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

createApp(App).use(vuetify).use(router).use(store).mount('#app')
