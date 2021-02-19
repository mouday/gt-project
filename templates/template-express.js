/**
 * express template
 * 
 * $ cnpm install express nodemon cors -S
 * 
 * 【development】
 * $ nodemon main.js
 * 
 * 【production】
 * $ node main.js
 */
const express = require("express");
var cors = require('cors')

const app = express();

// 允许跨域
app.use(cors())

// 解析 application/json
app.use(express.json()) 
// 解析 application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })) 

// 静态文件
app.use(express.static('public'))

// 路由
app.get("/", (request, response) => {
    response.send("hello world!");
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server runing on http://127.0.0.1:${port}`);
})
