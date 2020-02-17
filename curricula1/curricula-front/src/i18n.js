import Vue from "vue";
import VueI18n from "vue-i18n";

// 引入工具函数
import { getStorage } from "@/utils";

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

export default new VueI18n({
  // locale 的值, 决定了页面加载时使用的自然语言
  // 优先使用用户选择的语言 || 其次是使用开发者偏好的(安装Vue I18n 的时候配置过, "zh", 存在vue.config.js) || 都找不到就使用"en"
  locale: getStorage("lang") || process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages()
});
