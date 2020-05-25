import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import actions from './actions'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import auth from './modules/auth'
import user from './modules/user'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: { auth, user },
  plugins: [vuexLocal.plugin]
})

/*
无论是Vuex 还是组件中的data 都遵循事先声明完毕的约定
因为响应式要对属性进行defineReactive

事后直接给对象添加属性, 是没有响应式的
想要响应式要使用Vue.set(obj, propertyKey, propertyValue), 这个函数内部使用了defineReactive


Vue.set 与 this.$set 同源

import { set } from '../observer/index'
Vue.set = set

import { set } from '../observer/index'
Vue.prototype.$set = set
*/