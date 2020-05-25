export default {
  curricula: [],
  // <v-snackbar> 消息框使用, 组件之间通用, 所以状态存在Vuex 中
  snackbar: {
    show: false,
    variant: 'success',
    message: ''
  },
  completeCounts: []
}
