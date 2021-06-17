const { jwtSecret } = require("../config/index");
const { verify } = require("../utils/jwt");
const {User} = require("../model/index")
module.exports = async (req, res, next) => {
  //获取token，验证是否有效
  let token = req.headers.authorization;
  token = token ? token.split(" ")[1] : null;
  if (!token) {
    return res
      .status(401)
      .json({
        code: "1",
        msg: "无权限访问",
      })
      .end();
  }
  try {
    const decodedToken = await verify(token, jwtSecret);
    req.user = await User.findById(decodedToken.userId)
    next()
  } catch (err) {
    return res
      .status(401)
      .json({
        code: "1",
        msg: "无效的token",
      })
      .end();
  }
};
