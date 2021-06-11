const mongoose = require("mongoose")
const { dbUrl } = require("../config")
const User = require("./user")

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on("error", (err) => {
  console.log("connection error:", err)
})
db.once("open", () => {
  console.log("数据库链接成功")
})

module.exports = {
  User,
}
