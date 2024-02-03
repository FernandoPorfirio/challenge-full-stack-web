<template>
  <div>
    <router-link :to="{ name: 'login' }">Login</router-link>
    <router-link :to="{ name: 'student' }">Student</router-link>
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
