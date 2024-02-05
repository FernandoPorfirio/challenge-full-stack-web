<template>
  <v-snackbar v-model="snackbar.show" :timeout="5000" multi-line>
    {{ snackbar.message }}
  </v-snackbar>
</template>

<script>
import SnackbarService from '@/components/SnackbarAlert/service.js';

export default {
  name: 'SnackbarAlert',
  setup() {
    const snackbar = SnackbarService.getSnackbar();
    return {
      snackbar,
    };
  },
};
</script>
