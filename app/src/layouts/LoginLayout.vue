<script>
import AppLogo from './components/AppLogo.vue'

export default {
  name: 'BlankLayout',
  components: {
    AppLogo
  }
}
</script>

<template>
  <div>
    <AppLogo :maxWidth="150" />

    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <router-view />
    </v-card>
  </div>
</template>
