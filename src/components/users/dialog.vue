<template>
  <Modal :value="register" @on-ok="ok" @on-cancel="cancel">
    <Tabs value="name1">
      <TabPane label="标签一" name="name1">
        <Login />
      </TabPane>
      <TabPane label="标签二" name="name2">注册</TabPane>
    </Tabs>
  </Modal>
</template>

<script>
import Login from "./login";
export default {
  components: {
    Login,
  },
  props: ["coRegister"],
  computed: {
    register() {
      return this.coRegister;
    },
  },
  methods: {
    ok() {
      this.$emit("update:coRegister", false);
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancle");
      this.$emit("update:coRegister", false);
    },
  },
};
</script>

<style>
</style>