<template>
  <div class>
    <Row>
      <Col span="20" style="margin-left: 5%;">
        <tabbar>
          <span slot="layout-logo">TomTao的Blog</span>
        </tabbar>
      </Col>
    </Row>

    <br />
    
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
    return {
      data: [
        {
          title: "This is title 1",
          description:
            "This is description, this is description, this is description.",
          avatar:
            "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
          content:
            "This is the content, this is the content, this is the content, this is the content.",
        },
        {
          title: "This is title 2",
          description:
            "This is description, this is description, this is description.",
          avatar:
            "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
          content:
            "This is the content, this is the content, this is the content, this is the content.",
        },
        {
          title: "This is title 3",
          description:
            "This is description, this is description, this is description.",
          avatar:
            "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
          content:
            "This is the content, this is the content, this is the content, this is the content.",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
