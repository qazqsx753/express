const mongoose = require("mongoose");
const baseModel = require("./base.model");
const tagsSchema = new mongoose.Schema({
  //名称
  name: {
    type: String,
    required: true,
  },
  //备注
  remark: String,
  //颜色
  color: String,
  //创建人
  createBy: String,
  //状态
  status: Boolean,
  ...baseModel
});
module.exports = mongoose.model("Tags", tagsSchema);
