const express = require("express")
const userController = require("../controller/user")
const { User } = require("../model")
const uservalidate = require("../validator/user")

const router = express.Router()

router.post("/login", uservalidate.login,userController.login)
// 注册
router.post("/users", uservalidate.register, userController.register)
//获取用户
router.get("/users", async (req, res, next) => {
  try {
    res.send("asas")
  } catch (err) {
    next(err)
  }
})

//更新用户
router.put("/users", async (req, res, next) => {
  res.send("Holle register")
})
module.exports = router
