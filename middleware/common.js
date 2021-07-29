exports.successStatus = (res,data={msg:"请求成功",data:{}}) => {
  return res
    .status(200)
    .json({
      code: "0",
      msg: data.msg,
      data:data.data
    })
};

exports.errorStatus = (res,data={msg:"请求失败"}) => {
   return res
      .status(200)
      .json({
        code: "1",
        msg: data.msg,
      })
  };
  
