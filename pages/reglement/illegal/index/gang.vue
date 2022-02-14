<template>
  <ReglementView name="gang" :parentTabName="parentTabName"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";

export default {
  name: "gang",
  components: {ReglementView},
  props: {
    parentTabName: {type: String, default: null}
  }
}
</script>
