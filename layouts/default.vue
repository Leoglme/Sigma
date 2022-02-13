<template>
  <div>
    <Navbar/>
    <Nuxt/>
  </div>
</template>

<script lang="ts">
import Navbar from "~/components/navigation/Navbar/index.vue";
export default {
  name: "default",
  components: {Navbar}
}
</script>

<style scoped>

</style>
