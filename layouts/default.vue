<template>
  <div>
    <Navbar/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Navbar from "~/components/navigation/Navbar/index.vue";
import Footer from "~/components/navigation/Footer/index";
export default {
  name: "default",
  components: {Navbar, Footer}
}
</script>

<style scoped>

</style>
