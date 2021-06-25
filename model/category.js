const mongoose = require("mongoose");
const baseModel = require("./base.model");
const Schema = mongoose.Schema;
const CategorysSchema = new mongoose.Schema({
  //标题
  name: {
    type: String,
    required: true,
  },
  //创建人
  createBy: String,
  parentId:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Categorys",
  },
  //状态
  status: Boolean,
  ...baseModel,
});

CategorysSchema.virtual('children', {
  localField: '_id',
  foreignField: 'parentId',
  justOne: false,
  ref: 'Categorys'
})

module.exports = mongoose.model("Categorys", CategorysSchema);
