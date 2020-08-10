<template>
  <div class="publish-article">
    <Row>
      <Col span="1">文章标题</Col>
      <Col span="18">
        <Input v-model="title" ref="title" placeholder="文章标题"></Input>
      </Col>
    </Row>
    <br />
    <Row>
      <Col span="1">缩略图</Col>
      <Col span="15">
        <Input v-model="thumbnail_url" ref="thumbnail_url" placeholder="可粘贴地址或上传文件"></Input>
      </Col>

      <Col span="2">
        <Upload
          action="http://127.0.0.1:8000/upload"
          :show-upload-list="false"
          :on-success="uploadSuccess"
          :on-error="uploadError"
        >
          <Button icon="ios-cloud-upload-outline">Upload files</Button>
        </Upload>
      </Col>
    </Row>
    <br />
    <Row>
      <Col span="1">标签</Col>
      <Col span="4">
        <Input placeholder="输入标签" ref="tagvalue"></Input>
      </Col>&nbsp;
      <Col span="2">
        <Button type="info" @click="addTag">添加标签</Button>
      </Col>
    </Row>
    <br />
    <Row>
      <Col span="1"></Col>
      <Col span="24" ref="tags">
        <Tag
          v-for="tag in tags"
          color="primary"
          :name="tag"
          :key="tag"
          closable
          type="dot"
          size="medium"
          @on-close="closeTag"
        >{{ tag }}</Tag>
      </Col>
    </Row>

    <br />

    <Row>
      <Col span="20">
        <MD />
      </Col>
    </Row>
    <br />

  </div>
</template>

<script>
import MD from "@/components/utils/mdEdit";

export default {
  name: "PublishArticle",
  data() {
    return {
      file: null,
      loadingStatus: false,
      title: "",
      tags: [],
      thumbnail_url: "",
    };
  },
  components: {
    MD,
  },
  methods: {
    handleUpload(file) {
      this.file = file;
      return false;
    },
    upload() {
      this.loadingStatus = true;
      this.$refs.upload.post(this.file);
    },
    addTag() {
      const tagValue = this.$refs.tagvalue.currentValue;
      if (tagValue.length <= 0 || tagValue.length > 5) {
        this.$Message.error("请输入正确标签内容:长度(0-5)");
      } else if (this.tags.length >= 4) {
        this.$Message.error("最多添加4个标签");
      } else {
        if (this.tags.indexOf(tagValue) === -1) {
          this.tags.push(tagValue);
        } else {
          this.$Message.error("当前标签已存在");
        }
      }
    },
    closeTag(event, name) {
      const index = this.tags.indexOf(name);
      this.tags.splice(index, 1);
    },
    uploadSuccess(response) {
      this.$Message.success("上传成功");
      this.thumbnail_url = response.url;
    },
    uploadError(error) {
      this.$Message.error("上传失败");
    },
  },
};
</script>

<style scoped>
.publish-article {
  text-align: left;
}

.article-base p {
  padding: 30px;
  font-size: 18px;
}
</style>
