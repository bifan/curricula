// jwt 生成非对称加密产生的token
const { checkToken } = require('../utils/jwt')

// 根据请求头中的authorization 中的token, 判断用户的权限(是否登陆)
function authMiddleware(req, res, next) {
  console.log('(*Φ皿Φ*) → authMiddleware')
  try {
    const token = req.headers.authorization.split(' ')[1]
    const isValid = checkToken(token)
    if (isValid) {
      return next()
    }
    res.status(401).send('Not Authorized')
  } catch(err) {
    res.status(401).send('Invalid Token')
  }
}

module.exports = authMiddleware
