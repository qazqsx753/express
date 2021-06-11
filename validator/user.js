const validate = require("../middleware/validator")
const { body } = require("express-validator")
const { User } = require("../model")
const md5 = require("../utils/md5")

exports.register = validate([
  body("username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .bail()
    .custom(async (username) => {
      const user = await User.findOne({ username })
      if (user) {
        return Promise.reject("用户已存在")
      }
    }),
  body("password").notEmpty().withMessage("密码不能为空"),
])
exports.login = [
  validate([
    body("username").notEmpty().withMessage("用户名不能为空"),
    body("password").notEmpty().withMessage("密码不能为空"),
  ]),
  validate([
    body("username").custom(async (username,{req})=>{
      const user = await User.findOne({username}).select("password")
      if(!user){
        return Promise.reject("用户不存在")
      }
      req.user = user
    })
  ]),
  validate([
    body("password").custom(async (password,{req})=>{
      console.log(password,req.user)
      if(md5(password)!==req.user.password){
        return Promise.reject("账号密码不正确")
      }
    })
  ]),
]
