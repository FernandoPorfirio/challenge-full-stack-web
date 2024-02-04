<template>
  <v-img class="mx-auto my-6" max-width="228" :src="logoPath" alt="App Logo"></v-img>
</template>

<script>
export default {
  name: 'AppLogo',
  data() {
    return {
      logoPath: null
    }
  },
  async created() {
    await this.loadLogo()
  },
  methods: {
    async loadLogo() {
      this.logoPath = (await import('@/assets/image/logo.svg')).default
    }
  }
}
</script>
