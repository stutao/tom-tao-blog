<template>
  <div class>
    <Row style=" padding-top: 50px;">
      <Col span="16" style="margin-left: 15%;">
        <List item-layout="vertical">
          <ListItem v-for="item in data" :key="item.title" style="cursor: pointer;">
            <ListItemMeta
              :avatar="item.avatar"
              :title="item.title"
              :description="item.description"
              :itemid="item.id"
              @click.native="artilceClick(item.id)"
            />
            {{ item.content }}
            <template slot="action">
              <li>
                <Icon type="ios-thumbs-up-outline" size="22" />123
              </li>
              <li>
                <Icon type="ios-eye-outline" size="22" />345
              </li>
              <li>
                <Icon type="ios-chatbubbles-outline" size="22" />345
              </li>
            </template>
            <template slot="extra">
              <img
                src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large"
                style="width: 280px"
              />
            </template>
          </ListItem>
        </List>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      data: [
        {
          id: 1,
          title: "This is title 1",
          description:
            "This is description, this is description, this is description.",
          avatar:
            "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
          content:
            "This is the content, this is the content, this is the content, this is the content.",
        },
        {
          id: 2,
          title: "This is title 2",
          description:
            "This is description, this is description, this is description.",
          avatar:
            "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
          content:
            "This is the content, this is the content, this is the content, this is the content.",
        },
        {
          id: 3,
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
  methods: {
    artilceClick(article_id) {
      this.$router.push("/article/" + article_id);
    },
  },
};
</script>

<style scoped>
</style>
