import axios from "axios";
import { Commit } from 'vuex';

interface State {
  name: string | null
}
const state: State = {
  name: localStorage.getItem('name') || '我是名称',
}

const getters = {
  getName: (state: State) => state.name
}

const mutations = {
  // 设置用户名
  setUsername (state: State, name: string): void {
    state.name = name
    localStorage.setItem('name', name)
  },
}

const actions: any = {
  // Commit 需要声明类型
  actionFoo(context: {commit: Commit}, data: any) { 
    axios({
      method: "post",
      data: {
        data
      },
      url:
        "https://www.easy-mock.com/mock/5c1afab75bedd73867442d61/example/mock"
    })
      .then(response => {
        context.commit('setUsername', response.data.data.name)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default {
  state, // 状态
  getters, // 对数据进行一些操作
  mutations, // 对状态做更改（同步）
  actions, // 提交mutations,可做异步操作
}
