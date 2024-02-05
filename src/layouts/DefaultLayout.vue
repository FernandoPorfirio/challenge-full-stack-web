<script>
import AppBar from '@/layouts/components/AppBar.vue'
import AppNavigation from '@/layouts/components/AppNavigation.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppBar,
    AppNavigation
  },
  data() {
    return {
      drawer: null,
      links: [
        { text: 'Home', to: '/', icon: 'mdi-home' },
        { text: 'Perfil', to: '/perfil', icon: 'mdi-account' },
        // Adicione mais links conforme necessário
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }
}
</script>

<template>
  <div>
    <app-bar @toggle-drawer="toggleDrawer" />
    <app-navigation :drawer="drawer" @update:drawer="toggleDrawer" :links="links" />
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>
