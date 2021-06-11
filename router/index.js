const express = require('express')
const users = require('./user')

const router = express.Router()

router.use(users)

router.get("/",(req,res)=>{
   res.send("Holle express")
})
module.exports = router