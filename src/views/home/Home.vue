<template>
  <div class="home">
    <el-button class="btn-switch-bg" @click="changeBg"
      >使用 --切换背景</el-button
    >

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题1">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="内容2">
        <el-input v-model="form.msg"></el-input>
      </el-form-item>
    </el-form>

    <HomeContent :content="form.content" :title="form.title" v-model="form.msg">
    </HomeContent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeContent from "./components/content.vue";
interface formData {
  title: String;
  content: String;
  msg: String;
}
@Component({
  components: {
    HomeContent
  }
})
export default class Home extends Vue {
  bgSwitch: Boolean = false;
  form: formData = {
    title: "标题",
    content: "内容",
    msg: ""
  };
  textContent: String | Number = 123;
  changeBg() {
    this.bgSwitch = !this.bgSwitch;
    let doc: any = document.documentElement;
    doc.style.setProperty("--bg", this.bgSwitch ? "#ececec" : "#fff");
  }
}
</script>
<style lang="scss">
body {
  background: var(--bg);
  .home {
    width: 400px;
  }
  .btn-switch-bg {
    margin-bottom: 15px;
  }
}
</style>
