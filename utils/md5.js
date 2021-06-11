const crypto = require("crypto")
const {secret} = require("../config")
const ret = 
module.exports = (str) => {
  return crypto.createHash("md5").update(secret + str).digest("hex")
}
