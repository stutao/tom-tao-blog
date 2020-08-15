<template>
  <Modal :value="register" @on-ok="ok" @on-cancel="cancel">
    <Tabs value="name1">
      <TabPane label="登录" name="name1">
        <Login />
      </TabPane>
      <TabPane label="注册" name="name2">
        <Register />
      </TabPane>
    </Tabs>
  </Modal>
</template>

<script>
import Login from "./login";
import Register from "./register";
export default {
  components: {
    Login,
    Register,
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
      // this.$Message.info("Clicked ok");
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