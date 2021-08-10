
const {User} = require("../model")
const {jwtSecret,tokenTimeOut} = require("../config")
const jwt = require("../utils/jwt")
const { successStatus } = require("../middleware/common");
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
    },jwtSecret,{ expiresIn:tokenTimeOut})
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
    res.status(200).json({
      code:0,
      msg:"请求成功",
      data:req.user
    })
  }catch(err){
    next(err)
  }
}

exports.getAllUser = async (req,res,next) => {
  try{
    const { page = 1, size = 10 } = req.body;
    const skip = (page - 1) * size;
    const count = await User.countDocuments();
    const userList = await User.find()
      .skip(skip)
      .limit(+size)
      .sort({
        createAt: -1,
      })
    successStatus(res, {
      data: {
        list: userList,
        count,
        page:page,
        size:size
      },
    });
  }catch(err){
    next(err)
  }
}