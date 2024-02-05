import { ref } from 'vue'

const snackbar = ref({
  show: false,
  message: ''
})

export default {
  showSnackbar(message) {
    snackbar.value.show = true
    snackbar.value.message = message

    setTimeout(() => {
      snackbar.value.show = false
      snackbar.value.message = ''
    }, 5000)
  },

  getSnackbar() {
    return snackbar
  }
}
