// 这是用来生成Token 的
// 用非对称加密的手段控制用户的权限, 服务端不需要维护session.
// 无状态有利于分布式随意增减服务
// 无状态也意味着难以实时修改权限, 权限不过期就一直有效
// JSON Web Token (JWT)
// https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html
// https://github.com/hokaccha/node-jwt-simple
const JWT = require('simple-jwt')

// 密钥的种子?
const secret = 'gwenstacy'
// 算法类型信息
const header = {
  typ: 'JWT',
  alg: 'HS512'
}
// Header.Payload.Signature
// 算法种类.权限描述.签名防篡改
// 可放在HTTP header Authorization / cookie / localStorage

function generateToken(userId) {
  const payload = {
    userId,
    exp: new Date().getTime() + 86400000
  }  
  const token = JWT.getToken(header, payload, secret)

  return token
}

function checkToken(token) {
  return JWT.verifyToken(token, secret)
}

module.exports = { generateToken, checkToken }
