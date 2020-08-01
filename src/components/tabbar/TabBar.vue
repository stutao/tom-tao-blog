<template>
  <Layout>
    <Header>
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo">TomTao后台管理</div>
        <div class="layout-nav">
          <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>Item 1
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>Item 2
          </MenuItem>
          <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>Item 3
          </MenuItem>
          <MenuItem name="4">
            <Icon type="ios-paper"></Icon>Item 4
          </MenuItem>
          <MenuItem name="5">
            <User />
          </MenuItem>
        </div>
      </Menu>
    </Header>
  </Layout>

</template>
<script>
import User from "@/components/users/user";
export default {
  data() {
    return {
      theme1: "dark",
    };
  },
  components: {
    User,
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
  width: 500px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
