import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/*
Vue 不允许动态添加根级响应式属性
必须在初始化实例前声明所有根级响应式属性, 哪怕只是一个空值
最主要的作用是像函数式编程那样, 事先声明, 能一眼看出依赖
*/
export default new Vuex.Store({
  state: {
    drawer: null
  },
  mutations: {
    toggleDrawerStatus(state) {
      state.drawer = !state.drawer;
    },
    setDrawerStatus(state, val) {
      state.drawer = val;
    }
  },
  actions: {},
  modules: {}
});

/*
数据共享 - 简单的数据共享
const sourceOfTruth = {}
const vmA = new Vue({ data: sourceOfTruth })
const vmB = new Vue({ data: sourceOfTruth })
*/

/*
数据共享 - 记录变化的数据共享 - store 模式, 通过方法间接的修改数据, 顺便监控变化
var store = {
  debug: true,
  state: { // state 存储数据 状态
    message: 'Hello!'
  },
  setMessageAction (newValue) { // action 改变数据并监控
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}

var vmA = new Vue({
  data: {
    privateState: {}, // 组件私有数据
    sharedState: store.state // 组件之间共享的存放在store 的数据
  }
})
*/

/*
数据共享 - Vuex
不直接修改数据, 而是派遣action
整个Vue 应用只有一个store 实例

state, 数据
action, 加工数据, 可以执行异步操作(mutation 中执行异步操作影响追踪数据变化)
  并告知Mutations 要修改数据
mutation, 保存数据并追踪数据变化
  使用store.commit 修改state, mutation 相当于已经有了最终数据可以保存到state 了
getter, 获取数据, 重复调用时有缓存优化
  缓存的理解
    function(参数){
      // 运算
      return 返回值 // 缓存返回值, 如果参数不变化就直接使用缓存, 不进行运算
    }
  就像computed 计算属性一样, getters 是store 的计算属性, getter返回的值会根据它的依赖被缓存起来, 且只有当它的依赖值发生改变才会被重新计算
  可以在获取数据的时候进行加工, 比如数据是个数组, 却只需要部分数据


Vuex 提供了mapState, MapGetters, MapActions, mapMutations 辅助函数简化操作

module, 为了避免Vuex 的store 过于臃肿, 用来分割
*/
