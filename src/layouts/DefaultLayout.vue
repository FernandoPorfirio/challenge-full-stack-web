<template>
  <div>
    <app-bar @toggle-drawer="toggleDrawer" />
    <v-navigation-drawer app v-model="drawer">
      <!-- Conteúdo do menu aqui -->
      <v-list>
        <v-list-item v-for="(link, index) in links" :key="index" :to="link.to">
          <template v-slot:prepend>
            <v-icon :icon="link.icon"></v-icon>
          </template>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
import AppBar from '@/layouts/components/AppBar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppBar
  },
  data() {
    return {
      drawer: true,
      links: [
        { text: 'Home', to: '/home', icon: 'mdi-home' },
        { text: 'Student', to: '/student', icon: 'mdi-account' }
      ]
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }
}
</script>
