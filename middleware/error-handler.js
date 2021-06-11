const util =  require('util')


module.exports = ()=>{
  return (err,req,res,next)=>{
    if(err){
      res.status(500).json({
        code:500,
        msg:"服务器发生异常",
        error:util.format(err),
      })
    }
    
  }
}