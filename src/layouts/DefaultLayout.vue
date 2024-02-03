<script>
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppContent,
    AppFooter
  }
}
</script>

<template>
  <div>
    <header>
      <AppHeader />
    </header>

    <main>
      <AppContent>
        <router-view></router-view>
      </AppContent>
    </main>

    <footer>
      <AppFooter />
    </footer>
  </div>
</template>
