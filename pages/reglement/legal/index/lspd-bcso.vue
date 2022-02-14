<template>
  <ReglementView name="lspdbcso" :parentTabName="parentTabName"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";

export default {
  name: "lspd-bcso",
  components: {ReglementView},
  props: {
    parentTabName: {type: String, default: ""}
  }
}
</script>
