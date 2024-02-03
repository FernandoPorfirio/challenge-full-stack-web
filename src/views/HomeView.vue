<!-- SeuComponente.vue -->

<template>
  <div>
    <h1>{{ mensagem }}</h1>
    <router-link :to="{ name: 'login' }">Login</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView',

  data() {
    return {
      mensagem: 'HomeView'
    }
  },
  methods: {},
  mounted() {}
}
</script>

<style scoped></style>
