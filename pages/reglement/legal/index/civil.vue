<template>
  <ReglementView name="civil" :parentTabName="parentTabName"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";

export default {
  name: "civil",
  components: {ReglementView},
  props: {
    parentTabName: {type: String, default: null}
  }
}
</script>
