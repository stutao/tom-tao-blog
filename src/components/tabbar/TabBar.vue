<template>
  <Menu mode="horizontal" :theme="theme1" active-name="1">
    <div class="layout-logo">
      <slot name="layout-logo"></slot>
    </div>
    <div class="layout-nav">
      <MenuItem name="1" @click.native="typeClick('')">
        <Icon type="md-paper-plane" />首页
      </MenuItem>
      <MenuItem name="2" @click.native="typeClick('python')">
        <Icon type="logo-python" />Python
      </MenuItem>
      <MenuItem name="3" @click.native="typeClick('CS')">
        <Icon type="ios-water" />CS基础
      </MenuItem>
      <MenuItem name="4" @click.native="typeClick('information_security')">
        <Icon type="md-lock" />信息安全
      </MenuItem>
      <MenuItem name="5">
        <User class="user" />
      </MenuItem>
    </div>
  </Menu>
</template>
<script>
import User from "@/components/users/user";
export default {
  data() {
    return {
      theme1: "light",
    };
  },
  components: {
    User,
  },
  methods: {
    typeClick(article_type) {
      this.$router.push("/index/" + article_type);
    },
  },
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 200px;
  height: 30px;
  float: left;
  position: relative;
  top: 5px;
  left: 10px;
  color: #17233d;
  font-size: 24px;
}
.layout-nav {
  width: 550px;
  margin: 0 auto;
  margin-right: 20px;
}
.user {
  float: right;
}
</style>
