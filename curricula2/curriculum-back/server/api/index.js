// 处理所有的 /api/v1 请求

const express = require('express')
const router = express.Router()

// 验证用户权限
const authMiddleware = require('../middleware/auth')

// 操作数据库表
const { curricula, authCurricula } = require('./curricula')

const count = require('./count')
const auth = require('./auth')
const users = require('./users')

// 用路由把URL 和Model 映射起来, 这种映射只会在服务启动时执行一次

// 显示All Curricula 时会触发 Request URL: http://localhost:5000/api/v1/curricula
router.use('/curricula', curricula)
// 对课程增删改的时候会调用这个(使用authMiddleware 判断是哪个用户的)
router.use('/curricula', authMiddleware, authCurricula)
// 点击View All 的时候会偷偷触发 Request URL: http://localhost:5000/api/v1/count
router.use('/count', count) // 计算每个课程的进度
// 点击登陆时使用此路由 Request URL: http://localhost:5000/api/v1/auth/login
router.use('/auth', auth)
// 显示My Curricula 时会触发 Request URL: http://localhost:5000/api/v1/users/5ec6f771f30646be8cdf3871/curricula
// 修改密码的时候
router.use('/users', authMiddleware, users)

module.exports = router
