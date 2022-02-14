<template>
  <ReglementView name="ems" :parentTabName="parentTabName"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";

export default {
  name: "ems",
  components: {ReglementView},
  props: {
    parentTabName: {type: String, default: null}
  }
}
</script>
