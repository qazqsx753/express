const mongoose = require("mongoose");
const baseModel = require("./base.model");
const Schema = mongoose.Schema;
const ArticlesSchema = new Schema({
  //标题
  title: {
    type: String,
    required: true,
  },
  //摘要
  desc: {
    type: String,
    default: "",
  },
  //内容
  content: {
    type: String,
    default: "",
  },
  category:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Categorys",
  },
  //作者
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref:"User",
    require: true
  },
  // //标签
  tags: {
    type: [String],
    default:[]
  },
  favoritesCount:{
    type: Number,
    default: 0
  },
  ...baseModel,
});
module.exports = mongoose.model("Articles", ArticlesSchema);
