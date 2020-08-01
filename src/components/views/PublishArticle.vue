<template>
  <div class="publish-article">
    <Row>
      <Col span="1">文章标题</Col>
      <Col span="18">
        <Input></Input>
      </Col>
    </Row>
    <br />
    <Row>
      <Col span="1">缩略图</Col>
      <Col span="15">
        <Input></Input>
      </Col>

      <Col span="2">
        <Upload :before-upload="handleUpload " action>
          <Button icon="ios-cloud-upload-outline">Select the file to upload</Button>
        </Upload>
        <div v-if="file !== null">
          Upload file: {{ file.name }}
          <Button
            type="text"
            @click="upload"
            :loading="loadingStatus"
          >{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button>
        </div>
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
      <Col span="24">
        <Tag
          v-for="tag in tags"
          color="primary"
          :name="tag"
          :key="tag"
          closable
          type="dot"
          size="medium"
          @on-close="closeTag"
        >{{tag}}</Tag>
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
  props: {
    link: String,
  },
  name: "PublishArticle",
  data() {
    return {
      file: null,
      loadingStatus: false,
      tags: [],
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
      const url = "http://127.0.0.1:8000/upload";
      const datas = {
        fefile: this.file,
      };
      this.$axios({
        url: url,
        method:'post',
        data: datas,
        header: {
          "Content-Type": "application/json", //如果写成contentType会报错
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addTag() {
      const tagValue = this.$refs.tagvalue.currentValue;
      if (this.tags.indexOf(tagValue) === -1) {
        this.tags.push(tagValue);
      } else {
        this.$Message.info("当前标签已存在");
      }
    },
    closeTag(event, name) {
      const index = this.tags.indexOf(name);
      this.tags.splice(index, 1);
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
