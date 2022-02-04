<template>
  <div>
    <Navbar/>
    <HomeCarousel/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from "~/components/navigation/Navbar";
import HomeCarousel from "~/components/Carousel/HomeCarousel";

export default Vue.extend({
  name: 'IndexPage',
  components: {Navbar, HomeCarousel}
})
</script>
