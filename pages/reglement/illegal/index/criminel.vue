<template>
  <ReglementView name="criminel" :parentTabName="parentTabName"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";

export default {
  name: "criminel",
  components: {ReglementView},
  props: {
    parentTabName: {type: String, default: null}
  }
}
</script>
