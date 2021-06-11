const {User} = require("../model")


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
    res.status(200).json({
      code:0,
      msg:"登录成功",
      data:{}
    })
  }catch(err){
    next(err)
  }
}