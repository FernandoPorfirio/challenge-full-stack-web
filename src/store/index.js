import { createStore } from 'vuex'
import { auth } from '@/modules/login/store.js'

const store = createStore({
  modules: {
    auth
  }
})

export default store
