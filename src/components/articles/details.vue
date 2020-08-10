<template>
  <Row style=" padding-top: 50px;">
    <Col span="16" style="margin-left: 15%;">
    <div v-html="content" v-highlight></div>
    </Col>
  </Row>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      content:''
    };
  },
  mounted(){
    const baseUrl='http://localhost:8000/'
    this.$axios.get(this.$route.path)
  }
};
</script>

<style>
</style>