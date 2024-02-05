<script>
import { LOGIN } from '@/constants/router.js'

export default {
  data: () => ({
    logoutOption: { text: 'Logout', icon: 'mdi-logout' }
  }),
  computed: {
    userName() {
      return this.$store.state.auth.user && this.$store.state.auth.user.user.name
        ? this.$store.state.auth.user.user.name
        : ''
    },
    userEmail() {
      return this.$store.state.auth.user && this.$store.state.auth.user.user.email
        ? this.$store.state.auth.user.user.email
        : ''
    }
  },
  methods: {
    async logout() {
      this.$store.dispatch('auth/logout')
      this.$router.push(LOGIN.path)
    }
  }
}
</script>

<template>
  <v-list>
    <v-list-item :title="userName" :subtitle="userEmail">
      <template v-slot:append>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item @click="logout">
                <template v-slot:prepend>
                  <v-icon :icon="logoutOption.icon"></v-icon>
                </template>
                <v-list-item-title>{{ logoutOption.text }}</v-list-item-title>
              </v-list-item>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-list-item>
  </v-list>
</template>
