const express = require('express')
const users = require('./user')
const article = require('./article')

const router = express.Router()

router.use(users)
router.use("/article",article)

router.get("/",(req,res)=>{
   res.send("Holle express")
})
module.exports = router