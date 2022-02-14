<template>
  <ReglementView name="organisation" :parentTabName="parentTabName"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";

export default {
  name: "organisation",
  components: {ReglementView},
  props: {
    parentTabName: {type: String, default: null}
  }
}
</script>
