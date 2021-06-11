const { validationResult } = require("express-validator")

module.exports = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)))
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    return res.status(400).json({ code: 1, msg: "请求失败", errors: errors.array() })
  }
}
