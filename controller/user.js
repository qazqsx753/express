
const {User} = require("../model")
const {jwtSecret} = require("../config")
const jwt = require("../utils/jwt")
// 用户注册
exports.register = async (req,res,next)=>{
  try{
    req.body.nickname = req.body.username
    let user = new User(req.body)
    await user.save()
    user = user.toJSON()
    delete user.password
    res.status(200).json({
      code:0,
      msg:"注册成功",
      data:user
    })
  }catch(err){
    next(err)
  }
}

//用户登录
exports.login = async (req,res,next)=>{
  try{
    const {_id} = req.user.toJSON()
    let user = await User.findById({_id})
    user = user.toJSON()
    const token = await jwt.sign({
      userId:_id
    },jwtSecret)
    res.status(200).json({
      code:0,
      msg:"登录成功",
      data:{
        token,
        user:user
      }
    })
  }catch(err){
    next(err)
  }
}

// 获取用户信息

exports.getuser = async (req,res,next)=>{
  try{
    console.log(req.headers.authorization)
    res.status(200).json({
      code:0,
      msg:"请求成功",
      data:{}
    })
  }catch(err){
    next(err)
  }
}