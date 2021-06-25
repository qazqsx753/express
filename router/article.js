const express = require("express");
const auth = require("../middleware/auth");
const articleController = require("../controller/article");
const articleValidate = require("../validator/article");
const router = express.Router();

//创建文章
router.post("/", auth, articleController.creatArticles);
//更新文章
router.put(
  "/:id",
  auth,
  articleValidate.updataArticle,
  articleController.updateArticles
);
//获取文章详情
router.get(
  "/:id",
  auth,
  articleValidate.getArticle,
  articleController.getArticlesOne
);
//获取文章列表
router.get("/", auth, articleController.getArticlesList);
//删除文章
router.delete("/:id", auth,articleValidate.deleteArticle, articleController.deleteArticle);

module.exports = router;
