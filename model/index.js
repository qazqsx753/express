const mongoose = require("mongoose")
const { dbUrl } = require("../config")
const User = require("./user")
const Categorys = require("./category")
const Articles = require("./article")
const Tags = require("./tags")
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useFindAndModify: false
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
  Tags,
  Articles,
  Categorys,
}
