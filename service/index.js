const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
// app.use(cors())
app.use(cors({
    origin: function (ctx) {
        console.log(111)
        // if (ctx.url === '/test') {
            return "*"; // 允许来自所有域名请求
        // }
        // return "http://localhost:8080"; // 这样就能只允许 http://localhost:8080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true, // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
    allowMethods: ['GET', 'POST', 'DELETE'],//["*"],//
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
const mongoose = require('mongoose')
const Router = require('koa-router')
let router = new Router();
app.use(bodyParser())
let user = require('./appApi/user.js')
router.use('/user',user.routes())
app.use(router.routes())
app.use(router.allowedMethods())
const {connect,initSchema} = require('./database/init.js')
;(async(ctx)=>{
    await connect()
    initSchema()
    // const User = mongoose.model('User');
    // let oneuser = new User({userName:'ytyt',password:'1227'})
    // oneuser.save().then(()=>{
    //     console.log('插入成功')
    // })
    // let userinfo = await User.find({}).exec();
    // console.log(userinfo)
    // ctx.body = {
    //     status:true,
    //     content:'杨婷，你好'
    // }
})()

app.listen(3010,()=>{
    console.log('运行在端口 3010 成功')
}) 