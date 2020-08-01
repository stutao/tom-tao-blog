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
.layout-footer-center {
  text-align: center;
}
</style>
<template>
  <div class="layout">
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
      <Layout :style="{padding: '0 50px'}">
        <!-- <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>-->
        <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
          <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
              <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                <Submenu name="1">
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>文章管理
                  </template>
                  <MenuItem name="1-1" >我的文章</MenuItem>
                  <MenuItem name="1-2" @click.native='publishClick'>发布文章</MenuItem>
                </Submenu>
                <Submenu name="2">
                  <template slot="title">
                    <Icon type="ios-keypad"></Icon>Item 2
                  </template>
                  <MenuItem name="2-1">Option 1</MenuItem>
                  <MenuItem name="2-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="3">
                  <template slot="title">
                    <Icon type="ios-analytics"></Icon>Item 3
                  </template>
                  <MenuItem name="3-1">Option 1</MenuItem>
                  <MenuItem name="3-2">Option 2</MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
              <router-view></router-view>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">2020-xxx 仅供学习使用 &copy; TalkingData TomTao</Footer>
    </Layout>
  </div>
</template>
<script>
import MdEdit from "@/components/utils/mdEdit";
import User from "@/components/users/user";

export default {
  data() {
    return {
      
    }
  },
  components: {
    MdEdit,
    User,
  },
  methods:{
    publishClick(){
      this.$router.push("/publish-article")
    }
  }
};
</script>
