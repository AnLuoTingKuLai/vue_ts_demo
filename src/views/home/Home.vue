<template>
  <div class="home">
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

@Component({
  components: {
    HomeContent
  }
})
export default class Home extends Vue {
  form: Object = {
    title: "标题",
    content: "内容",
    msg: ""
  };
  textContent: String = "12";
}
</script>
<style lang="scss">
.home {
  width: 400px;
}
</style>
