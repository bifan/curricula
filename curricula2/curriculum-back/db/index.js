const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/curriculumapp', {
  // https://mongoosejs.com/docs/api/mongoose.html#mongoose_Mongoose-connect
  // 使用新的URL 解析器(解析 mongodb://localhost:... ), MongDB 的旧解析器已经是待删除状态了
  useNewUrlParser: true,
  // 使用新版本的"服务发现和监听引擎", 旧版已是待删除状态
  useUnifiedTopology: true
})

// 仅仅是连接数据库, 下面部分是不需要的
// 但是 ../api/curricula.js 中有用到 → const { Curriculum } = require('@db')
const Curriculum = require('./Curriculum')
const User = require('./User')

// 大概是这样有数据库的语义
// require('@db') 里面包含了所有用到的数据库中的表
module.exports = {
  Curriculum,
  User
}
