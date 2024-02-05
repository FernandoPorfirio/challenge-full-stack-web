<script>
import AuthService from '../services.js'

export default {
  name: 'LoginView',
  data() {
    return {
      formData: {
        visible: false,
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async submitForm() {
      const { email, password } = this.formData
      try {
        await AuthService.login({ email, password })
      } catch (error) {
        this.handleLoginError(error)
      }
    },
    handleLoginError(error) {
      const errorMessage = error.response
        ? `Erro: ${error.response.status} - ${error.response.data.message}`
        : 'Erro desconhecido.'

      this.$snackbar.showSnackbar(errorMessage)
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="text-subtitle-1 text-medium-emphasis">Account</div>

    <v-text-field
      v-model="formData.email"
      density="compact"
      placeholder="Email address"
      prepend-inner-icon="mdi-email-outline"
      variant="outlined"
    ></v-text-field>

    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
      Password
    </div>

    <v-text-field
      v-model="formData.password"
      :append-inner-icon="formData.visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="formData.visible ? 'text' : 'password'"
      density="compact"
      placeholder="Enter your password"
      prepend-inner-icon="mdi-lock-outline"
      variant="outlined"
      @click:append-inner="formData.visible = !formData.visible"
    ></v-text-field>

    <v-btn type="submit" block class="mb-8" color="blue" size="large" variant="tonal">Log In</v-btn>
  </form>
</template>
