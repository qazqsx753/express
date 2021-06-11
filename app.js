const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const router = require("./router")
const errorHandler = require("./middleware/error-handler")

require('./model')
const app = express()
app.disable('etag');
app.use(cors())
app.use(morgan('dev'))

app.use(express.json())

const port = process.env.PORT || "5050"

app.use('/admin',router)

app.use(errorHandler())

app.listen(port,()=>{
  console.log(`服务器运行：http://localhost:${port}`)
})