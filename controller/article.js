const { Articles, User } = require("../model");
// 创建文章
exports.creatArticles = async (req, res, next) => {
  try {
    const article = new Articles(req.body);
    article.author = req.user._id;
    article.populate("author").execPopulate();
    await article.save();
    res.status(200).json({
      code: 0,
      msg: "创建成功",
      data: article,
    });
  } catch (err) {
    next(err);
  }
};

//编辑文章
exports.updateArticles = async (req, res, next) => {
  try {
    const article = req.body
    const data =  await Articles.findByIdAndUpdate(req.params.id,article).exec()
    res.status(200).json({
      code: 0,
      msg: "编辑成功",
      data:data
    });
  } catch (err) {
    next(err);
  }
};

// 获取文章详情
exports.getArticlesOne = async (req, res, next) => {
  try {
    console.log(req.params);
    const id = req.params.id;
    const Article = await Articles.findById(id).populate("author");
    res.status(200).json({
      code: 0,
      msg: "请求成功",
      data: Article,
    });
  } catch (err) {
    next(err);
  }
};
//获取文章列表
exports.getArticlesList = async (req, res, next) => {
  try {
    const { page = 1, size = 10, tags, author } = req.body;
    const filter = {};
    if (tags) {
      filter.tags = tags;
    }
    if (author) {
      filter.author = author;
    }
    const skip = (page - 1) * size;
    const count = await Articles.countDocuments();
    const articleList = await Articles.find(filter)
      .skip(skip)
      .limit(+size)
      .sort({
          createAt:-1
      })
      .populate("author");
    res.status(200).json({
      code: 0,
      msg: "获取成功",
      data: {
        list: articleList,
        count,
      },
    });
  } catch (err) {
    next(err);
  }
};

// 删除文章
exports.deleteArticle= async (req,res,next)=>{
    try{
       await Articles.findByIdAndDelete(req.params.id)
       res.status(200).json({
        code: 0,
        msg: "删除成功",
      });
    }catch(err){
        next(err)
    }
}
