const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const login = require('./routes/login')
const discuss = require('./routes/discuss')
const brief = require('./routes/brief')

//配置中间件，此中间件的作用是对post请求的请求体进行解析
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//登陆
app.use('/login', login)
//讨论
app.use('/discuss', discuss)
//简介等
app.use('/brief', brief)

app.listen(3009)