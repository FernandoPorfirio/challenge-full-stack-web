<script>
import * as yup from 'yup'
import StudentService from '../../services'
import cpfValidator from '@/utils/cpfValidator.js'
import { STUDENT_LIST } from '@/constants/router'

export default {
  name: 'StudentForm',
  data() {
    return {
      readOnly: false,
      show: false,
      formData: {
        id: '',
        ra: '',
        name: '',
        email: '',
        cpf: ''
      },
      validationSchema: yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email address').required('Email is required'),
        cpf: yup
          .string()
          .required('CPF is required')
          .test('cpf-validation', 'Invalid CPF', cpfValidator)
      }),
      validationErrors: {},
      loading: false,
      getStudentPath: STUDENT_LIST.path
    }
  },
  methods: {
    async submitForm() {
      try {
        await this.validationSchema.validate(this.formData, { abortEarly: false })
        await StudentService.createStudent(this.formData)
        this.$router.push(STUDENT_LIST.path)
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
  },
  created() {
    const studentData = sessionStorage.getItem('student')

    if (studentData) {
      const parsedData = JSON.parse(studentData)
      this.formData.id = parsedData.id || ''
      this.formData.ra = parsedData.ra || ''
      this.formData.name = parsedData.name || ''
      this.formData.email = parsedData.email || ''
      this.formData.cpf = parsedData.cpf || ''

      this.readOnly = true
      this.show = true
    }
  },
  async mounted() {}
}
</script>

<template>
  <div class="container">
    <v-form @submit.prevent="submitForm">
      <v-text-field
        v-if="show"
        disabled="true"
        v-model="formData.id"
        label="ID"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-if="show"
        :readonly="readOnly"
        v-model="formData.ra"
        label="RA"
        variant="outlined"
      ></v-text-field>
      <v-text-field v-model="formData.name" label="Name" variant="outlined"></v-text-field>
      <v-text-field v-model="formData.email" label="E-mail" variant="outlined"></v-text-field>
      <v-text-field
        :readonly="readOnly"
        v-model="formData.cpf"
        label="CPF"
        variant="outlined"
      ></v-text-field>
      <v-btn type="submit" variant="tonal" color="green-darken-4"> Save </v-btn>
      <v-btn :to="getStudentPath" variant="tonal" color="red-darken-4"> Close </v-btn>
    </v-form>
  </div>
</template>

<style scoped></style>
