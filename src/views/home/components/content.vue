<template>
  <div class="HomeContent">
    <p>
      {{ watchMsg }}
      <br />
      {{ computerMsg }}
    </p>
    <p>{{ msg1 }}--1</p>
    <el-button @click="msgChange">修改msg值</el-button>
    <p>================<br />下面是获取了store的数据</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Model } from "vue-property-decorator";
@Component({
  components: {}
})
export default class HomeContent extends Vue {
  watchMsg: String = "";

  @Prop({
    type: String,
    default: "測試内容"
  })
  content: String;

  @Prop() title: String;

  // 监听
  @Watch("content", { deep: true, immediate: true })
  watchCount(newVal: any, oldVal: any) {
    if (newVal) {
      this.watchMsg = newVal;
    }
  }

  // 计算显示内容
  get computerMsg(): String {
    return `${this.title} _ ${this.content}`;
  }

  //自定义双向监听
  @Model("emitName", { type: String }) msg1: String;
  msgChange() {
    this.$emit("emitName", "点击按钮修改了数据");
  }
}
</script>
