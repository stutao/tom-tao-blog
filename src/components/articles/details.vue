<template>
  <layout>
    <Row style=" padding-top: 50px;" slot="content">
      <Col span="16" style="margin-left: 15%;">
        <div v-html="content" v-highlight></div>
      </Col>
    </Row>
  </layout>
</template>

<script>
import layout from "@/components/utils/Layout";
export default {
  name: "",
  components: {
    layout,
  },
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    const baseUrl = "http://localhost:8000";
    this.$axios.get(baseUrl + this.$route.path).then((res) => {
      console.log(res);
      this.content = res.data.data.content;
    });
  },
};
</script>

<style>
</style>