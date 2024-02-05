<script>
import * as yup from 'yup'
import AuthService from '../services.js'
import { HOME } from '@/constants/router.js'

export default {
  name: 'LoginView',
  data() {
    return {
      formData: {
        visible: false,
        email: '',
        password: ''
      },
      validationSchema: yup.object().shape({
        email: yup.string().email('Invalid email address').required('Email is required'),
        password: yup.string().required('Password is required')
      }),
      validationErrors: {},
      loading: false
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push(HOME.path)
    }
  },
  methods: {
    async submitForm() {
      try {
        await this.validationSchema.validate(this.formData, { abortEarly: false })
        const { email, password } = this.formData
        await AuthService.login({ email, password })
        this.$router.push(HOME.path)
      } catch (error) {
        if (error.name === 'ValidationError') {
          this.handleValidationErrors(error.errors)
        } else {
          this.handleLoginError(error)
        }
      }
    },
    handleValidationErrors(errors) {
      const errorMessage = errors.join(' - ')

      this.$snackbar.showSnackbar(errorMessage)
    },
    handleLoginError(error) {
      const errorMessage = error.response
        ? `Error: ${error.response.status} - ${error.response.data.message}`
        : 'Unknown error.'

      this.$snackbar.showSnackbar(errorMessage)
    }
  }
}
</script>

<template>
  <v-form @submit.prevent="submitForm">
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
  </v-form>
</template>
