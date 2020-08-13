<template>
  <div class="layout">
    <Layout>
      <Header>
        <slot name="header">
          <Row>
            <Col span="20" style="margin-left: 5%;">
              <tabbar>
                <span slot="layout-logo">TomTao的Blog</span>
              </tabbar>
            </Col>
          </Row>
        </slot>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <slot name="content"></slot>
      </Content>

      <Footer class="layout-footer-center">2020-xxx 仅供学习使用 &copy; TalkingData TomTao</Footer>
    </Layout>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/TabBar";
export default {
  components: {
    tabbar,
  },
};
</script>

<style>
.layout-footer-center {
  width: 100%;
  text-align: center;
}
.ivu-layout-header {
  background: #fff;
}
</style>