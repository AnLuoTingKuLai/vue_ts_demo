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

    <el-form ref="form" :model="formData" label-width="80px">
      <el-form-item label="store的值">
        <el-input v-model="formData.text"></el-input>
      </el-form-item>
    </el-form>

    <el-button @click="storeChange">修改store的值</el-button>
    <el-button @click="axiosStoreChange">请求axios之后修改store值</el-button>
    <p>{{ storeName }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Model } from "vue-property-decorator";
// import Component from "vue-class-component";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import baseInfo from "@/store/modules/baseInfo";

interface formData {
  text: String;
}
interface HomeContent2 {
  formData: formData;
}

@Component({
  components: {}
})
export default class HomeContent extends Vue implements HomeContent2 {
  // store
  @Getter("getName") storeName: any;
  @Mutation("setUsername") setUsername: any;
  @Action("actionFoo") actionFoo: any;

  // prop
  @Prop({
    type: String,
    default: "測試内容"
  })
  content: string;

  @Prop() title: string;

  // data
  watchMsg: String = "";
  formData = {
    text: this.storeName
  };

  // watch
  @Watch("content", { deep: true, immediate: true })
  watchCount(newVal: string, oldVal: string) {
    if (newVal) {
      this.watchMsg = newVal;
    }
  }
  // conputer
  get computerMsg(): String {
    return `${this.title} _ ${this.content}`;
  }

  //v-model 自定义双向监听
  @Model("emitName", { type: String }) msg1: String;

  // created
  created() {
    console.log("创建的时候");
  }

  // mounted
  mounted() {
    console.log("装载的时候");
  }

  // methods
  msgChange() {
    this.$emit("emitName", "点击按钮修改了数据");
  }
  // 修改store 的name
  storeChange() {
    this.setUsername(this.formData.text);
  }
  // 请求接口 获取数据 之后修改name
  axiosStoreChange() {
    this.actionFoo({
      title: this.title,
      content: this.content
    });
  }
}
</script>
