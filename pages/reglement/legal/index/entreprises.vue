<template>
  <ReglementView name="entreprises" :parentTabName="parentTabName"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";

export default {
  name: "entreprises",
  components: {ReglementView},
  props: {
    parentTabName: {type: String, default: null}
  }
}
</script>
