<script>
import UserInfo from '@/layouts/components/UserInfo.vue'
import AppLogo from '@/layouts/components/AppLogo.vue'

export default {
  name: 'AppBar',
  components: {
    UserInfo,
    AppLogo
  },
  props: {
    userData: Object
  }
}
</script>

<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="$emit('toggle-drawer')"></v-app-bar-nav-icon>
    <app-logo :maxWidth="70" />
    <v-spacer></v-spacer>
    <user-info />
  </v-app-bar>
</template>
