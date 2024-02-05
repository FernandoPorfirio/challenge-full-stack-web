<template>
  <v-snackbar v-model="snackbar.show" :timeout="5000">
    {{ snackbar.message }}

    <template v-slot:actions>
      <v-btn color="pink" variant="text" @click="snackbar.show = false"> X </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import SnackbarService from '@/components/SnackbarAlert/service.js'

export default {
  name: 'SnackbarAlert',
  setup() {
    const snackbar = SnackbarService.getSnackbar()
    return {
      snackbar
    }
  }
}
</script>
