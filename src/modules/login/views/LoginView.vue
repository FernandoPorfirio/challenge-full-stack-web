<script>
import LoginForm from '../components/LoginForm.vue'

import AuthService from '../services.js'

export default {
  name: 'LoginView',
  components: {
    LoginForm
  },
  data() {
    return {
      formEmail: '',
      formPassword: ''
    }
  },
  methods: {
    async handleSubmit(formData) {
      const response = await AuthService.login(formData)
      console.log(response)
    }
  }
}
</script>

<template>
  <LoginForm v-model:email="formEmail" v-model:password="formPassword" @submit="handleSubmit" />
</template>
