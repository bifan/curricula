import Vue from 'vue'
import Vuelidate from 'vuelidate'

import App from './App.vue'
import router from './router'
import store from './store'
// 尚未使用
import './registerServiceWorker'
import vuetify from './plugins/vuetify';

import './sass/index.sass'

Vue.use(Vuelidate)
// 减少控制台信息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
