<template>
  <h1>LOGIN</h1>

  <form @submit.prevent="login">
    <input type="email" placeholder="your email" v-model="user.email" />
    <input type="password" placeholder="your password" v-model="user.password" />
    <button type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import http from '@/services/http.js'
import { reactive, onMounted } from 'vue'
// import { useStore } from 'vuex'

const user = reactive({
  email: '',
  password: ''
})

export default {
  setup() {
    // const store = useStore()

    const login = async () => {
      try {
        const { data } = await http.post('/auth', user)
        console.log(data)

        // store.dispatch('auth/saveAuthToken', data.token)
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(() => {
      // store.dispatch('auth/loadAuthToken')
    })

    return {
      user,
      login,
      // isAuthenticated: store.getters['auth/isAuthenticated']
    }
  }
}
</script>

<style scoped></style>
