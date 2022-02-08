<template>
  <main style="max-width: 100vw; overflow-y: hidden">
    <Navbar/>
    <HomeCarousel/>
    <CharacterSection/>
    <Captures/>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from "~/components/navigation/Navbar";
import Captures from "~/components/Captures";
import HomeCarousel from "~/components/Carousel/HomeCarousel";
import CharacterSection from "~/components/CharacterSection/index";

export default Vue.extend({
  name: 'IndexPage',
  components: {Navbar, HomeCarousel, Captures, CharacterSection}
})
</script>
