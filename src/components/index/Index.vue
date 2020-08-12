<template>
  <div>
    <layout>
      <router-view slot="content"></router-view>
    </layout>
  </div>
</template>

<script>
import layout from "@/components/utils/Layout";
export default {
  name: "Index",
  components: {
    layout,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>



<style scoped>
</style>
