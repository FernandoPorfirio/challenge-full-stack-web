<!-- SeuComponente.vue -->

<template>
  <div class="text-subtitle-1 text-medium-emphasis">Account</div>

  <v-text-field
    density="compact"
    placeholder="Email address"
    prepend-inner-icon="mdi-email-outline"
    variant="outlined"
  ></v-text-field>

  <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
    Password
  </div>

  <v-text-field
    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
    :type="visible ? 'text' : 'password'"
    density="compact"
    placeholder="Enter your password"
    prepend-inner-icon="mdi-lock-outline"
    variant="outlined"
    @click:append-inner="visible = !visible"
  ></v-text-field>

  <v-btn block class="mb-8" color="blue" size="large" variant="tonal"> Log In </v-btn>
</template>

<script>
export default {
  name: 'LoginView',
  data: () => ({
    visible: false
  }),
  methods: {},
  mounted() {}
}
</script>

<style scoped></style>
