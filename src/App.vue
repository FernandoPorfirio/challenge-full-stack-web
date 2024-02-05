<script>
export default {
  name: 'App'
}
</script>

<template>
  <div>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-view />
    <SnackbarAlert />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
