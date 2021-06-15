const jwt = require("jsonwebtoken")
const {promisify} = require("util")
//生成jwt
exports.sign = promisify(jwt.sign)

//验证token
exports.verify = promisify(jwt.verify)

// 直接解析数据不验证token
exports.decode = promisify(jwt.decode)