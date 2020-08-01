<template>
  <Dropdown style="margin-left: 20px;float:right">
    <div class="avatar">
      <div v-if="isLogin">
        <Avatar src="https://tse3-mm.cn.bing.net/th/id/OIP.RKh2hxr2mwPR__c-Ya2XFQAAAA?pid=Api&rs=1" />
      </div>
      <div v-else>
        登录/注册
        <Icon type="ios-arrow-down"></Icon>
      </div>
    </div>
    <DropdownMenu slot="list">
      <div v-if="isLogin">
        <DropdownItem>个人中心</DropdownItem>
        <DropdownItem>退出登录</DropdownItem>
      </div>
      <div v-else>
        <DropdownItem>登录</DropdownItem>
        <DropdownItem>注册</DropdownItem>
      </div>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      userName: "李四",
      isLogin: true,
    };
  },
};
</script>

<style scoped>
img {
  padding-top: 5px;
  height: 100%;
  width: 50px;
}
.avatar {
  cursor: pointer;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 14px;
  color: #17233d;
  padding-right: 10px;
}
</style>
