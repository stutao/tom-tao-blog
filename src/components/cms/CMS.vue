<template>
  <div>
    <div>
      <TabBar />
      <div class="CMS-Menu">
        <Menu active-name="1-2" :theme="theme1">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-analytics" />文章管理
            </template>

            <MenuItem name="1-1" @click.native="itemClick">发布文章</MenuItem>

            <MenuItem name="1-2">我的文章</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-filing" />资料中心
            </template>
            <MenuItem name="2-1">我的收藏</MenuItem>
            <MenuItem name="2-2">我的点赞</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-cog" />数据统计
            </template>
            <MenuItem name="3-1">Option 9</MenuItem>
            <MenuItem name="3-2">Option 10</MenuItem>
            <MenuItem name="3-3">Option 11</MenuItem>
            <MenuItem name="3-4">Option 12</MenuItem>
          </Submenu>
        </Menu>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import TabBar from "@/components/tabbar/TabBar";

export default {
  data() {
    return {
      link: "/publish-article",
      theme1: "light",
    };
  },
  components: {
    TabBar,
  },
  methods: {
    itemClick() {
      console.log("点击");
      this.$router.push(this.link);
    },
  },
};
</script>

<style scoped>
.ivu-menu-submenu .ivu-menu-item-active .ivu-menu-child-item-active {
  height: 49px;
}
.CMS-Menu {
  float: left;
}
</style>