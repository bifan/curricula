// Vuex module, 拆分Vuex 避免臃肿难维护
// 把用户选择的主题存储在浏览器本地, 重新加载后继续使用用户选择的主题

import { getStorage, setStorage, getSystemTheme } from "@/utils";

export default {
  state: {
    theme: getStorage("theme") || getSystemTheme() || { isDarkTheme: true } // 是否使用Dark theme
  },
  getters: {
    theme: state => state.theme
  },
  mutations: {
    // 网站是否使用Dark theme, 存储在本地
    toggleTheme: state => {
      state.theme.isDarkTheme = !state.theme.isDarkTheme;
      setStorage("theme", { isDarkTheme: state.theme.isDarkTheme });
    }
  }
};
