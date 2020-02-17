// Vuex module, 拆分Vuex 避免臃肿难维护
// 把用户选择的语言存储在浏览器本地, 重新加载后继续使用用户选择的语言

import { getStorage, setStorage, getBrowserLang } from "@/utils";

export default {
  state: {
    lang: getStorage("lang") || getBrowserLang() // 项目初始化时，默认为浏览器的语言
  },
  getters: {
    lang: state => state.lang
  },
  mutations: {
    /*
      网站使用的语言
      在使用this.$root.$i18n.locale 改变站内语言的同时, 保存语言选项到浏览器本地, 以便刷新后保留状态
    */
    setlang: (state, lang) => {
      state.lang = lang;
      setStorage("lang", lang);
    }
  }
};
