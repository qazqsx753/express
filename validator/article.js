const validate = require("../middleware/validator");
// const { param } = require("express-validator");
const { Articles } = require("../model");
// const mongoose = require("mongoose");
exports.getArticle = validate([validate.isValidObjectId(["params"], "id")]);

exports.updataArticle = [
  validate([validate.isValidObjectId(["params"], "id")]),
  async (req, res, next) => {
    const articleId = req.params.id;
    const article = await Articles.findById(articleId);
    if (!article) {
      return res.status(200).json({
        code: 1,
        msg: "没有找到对应的文章",
      });
    }
    req.article = article;
    next();
  },
  async (req, res, next) => {
    //数据库取出来为ObjectId类型，不转译会走if分支
    if (req.article.author.toString() !== req.user._id.toString()) {
      return res.status(200).json({
        code: 1,
        msg: "没有权限修改此文章",
      });
    }
    next();
  },
];

exports.deleteArticle = [
  validate([validate.isValidObjectId(["params"], "id")]),
  async (req, res, next) => {
    const articleId = req.params.id;
    const article = await Articles.findById(articleId);
    req.article = article;
    if (!article) {
      return res.status(200).json({
        code: 1,
        msg: "没有找到对应的文章",
      });
    }
    next();
  },
];
