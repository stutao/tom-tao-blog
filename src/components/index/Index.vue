<template>
  <div>
    <Row>
      <Col span="20" style="margin-left: 5%;">
        <tabbar>
          <span slot="layout-logo">TomTao的Blog</span>
        </tabbar>
      </Col>
    </Row>
    <br />
    <router-view></router-view>
    <Footer class="layout-footer-center">2020-xxx 仅供学习使用 &copy; TalkingData TomTao</Footer>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/TabBar";
export default {
  name: "Index",
  components: {
    tabbar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>



<style scoped>
.layout-footer-center {
  position: absolute;
  bottom:0;
  width: 100%;
  text-align: center;
}
</style>
