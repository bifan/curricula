// express → web 服务器框架(中间件容器)
const express = require('express')
// helmet → 自动设置一些response http headers 保安全
const helmet = require('helmet')
// cors → 设置跨域策略 Cross-origin resource sharing (CORS) 
const cors = require('cors')

// 回调函数 → 从./api 里面找函数, 如果路径是目录, 就找index.js
const routes = require('./api')
// require("") → 连接数据库(执行../db/index.js)
require('../db')

// express 是典型的函数多状态应用, 可以构造实例, 可以作为对象提供成员
const app = express()
const port = 5000

// middleware
// 使用express 处理JSON 的预设
app.use(express.json())
// 设置安全http headers
app.use(helmet())
// 设置跨域http headers
app.use(cors())

// 路由 → 决定请求由谁处理
// URL /api/v1 的请求由 ./api/index.js 来处理
app.use('/api/v1', routes)

// URL / 响应个Hello World!
app.get('/', (req, res) => res.send('Hello World!'))

// 监听的端口, 启动WEB 服务
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
