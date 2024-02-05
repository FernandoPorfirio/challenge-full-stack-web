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
      try {
        await AuthService.login(formData)
      } catch (error) {
        this.$snackbar.showSnackbar(
          `Erro: ${error.response.status} - ${error.response.data.message}`
        )
      }
    }
  }
}
</script>

<template>
  <LoginForm v-model:email="formEmail" v-model:password="formPassword" @submit="handleSubmit" />
</template>
