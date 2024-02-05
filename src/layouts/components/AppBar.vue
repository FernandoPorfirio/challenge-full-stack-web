<script>
import UserInfo from '@/layouts/components/UserInfo.vue'
import AppLogo from '@/layouts/components/AppLogo.vue'

export default {
  name: 'AppBar',
  components: {
    UserInfo,
    AppLogo
  },
  methods: {
    toggleDrawer() {
      this.$emit('toggle-drawer')
    }
  }
}
</script>

<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    <app-logo :maxWidth="70" />
    <v-spacer></v-spacer>
    <user-info />
  </v-app-bar>
</template>
