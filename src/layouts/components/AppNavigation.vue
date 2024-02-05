<script>
export default {
  props: {
    drawer: Boolean,
    links: Array
  }
}
</script>

<template>
  <v-navigation-drawer app :value="drawer" @input="$emit('update:drawer', $event)">

  </v-navigation-drawer>
</template>
