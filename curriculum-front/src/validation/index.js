import Vue from "vue";

// 废弃Vee Validate
// 使用Vuetify 自带的Validate

// 表单验证 - 加载依赖
import { ValidationProvider, extend } from "vee-validate";
// 表单验证 - 加载规则提示信息依赖
import { required, regex } from "vee-validate/dist/rules";

// 表单验证 - 自定义提示信息, 必填项
extend("required", {
  ...required,
  message: "This field is required"
});

// 表单验证 - 自定义提示信息, 正则验证URL
// extend("regex", {
//   ...regex,
//   message: "Regex failed"
// });
extend("url", value => {
  if (
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
      value
    )
  )
    return true;
  return "Please provide a valid URL";
});

// 表单验证 - 注册组件
Vue.component("ValidationProvider", ValidationProvider);
