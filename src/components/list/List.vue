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
            />
            {{ item.content }}
            <template slot="action">
              <li>
                <Icon type="ios-star-outline" />123
              </li>
              <li>
                <Icon type="ios-thumbs-up-outline" />234
              </li>
              <li>
                <Icon type="ios-chatbubbles-outline" />345
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
    return {};
  },
};
</script>

<style scoped>
</style>
