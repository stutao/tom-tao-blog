<template>
  <div>
    <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 600px" />
    <br />
    <Button type="success" short @click="submit">发布</Button>
    <!-- <div v-html="html" v-highlight> -->
    </div>
  </div>
</template>

<script>
// 导入组件 及 组件样式
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

export default {
  components: {
    mavonEditor,
  },
  // content:输入的markdown
  // html：及时转的html
  data() {
    return {
      content: "",
      html: "",
    };
  },
  methods: {
    // 所有操作都会被解析重新渲染
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    // 提交
    submit() {
      const title = this.$parent.$parent.$parent.title;
      const thumbnail = this.$parent.$parent.$parent.thumbnail_url;
      const tags = this.$parent.$parent.$parent.tags;
      const content = this.content;
      const html = this.html;
      const data = {
        title,
        thumbnail,
        tags,
        content,
      };
      console.log(data);
      this.$axios.post("http://127.0.0.1:8000/article/create?user_id=1", data);
    },
  },
};
</script>
