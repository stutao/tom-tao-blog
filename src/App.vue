<template>
  <div id="app">
    <index />
  </div>
</template>

<script>
import CMS from "@/components/cms/CMS";
import index from "@/components/index/Index";
export default {
  name: "App",
  components: {
    CMS,
    index,
  },
};
</script>

<style scoped>
/* #app {
  margin: 0 15%;
} */
</style>
