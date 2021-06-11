const mongoose = require("mongoose")
const baseModel = require("./base.model")
const md5 = require("../utils/md5")
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  phone: String,
  password: {
    type: String,
    required: true,
    set: (value) => md5(value),
    select: false,
  },
  image: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
  },
  status: {
    type: Number,
    default:1
  },
  ...baseModel,
})
module.exports = mongoose.model("User", userSchema)
