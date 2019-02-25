const Router = require ('koa-router')
const mongoose = require('mongoose')
let router = new Router()
router.get('/',async(ctx)=>{
    ctx.body="这是用户操作首页"
})
router.post('/register',async(ctx)=>{
    // ctx.body=ctx.request.body
    // initSchemas()
    const User = mongoose.model('User');
    let newuser = new User(ctx.request.body);
    await newuser.save().then(()=>{
        // let users = await User.find({}).exec()
        ctx.body ={
            code:200,
            message:'注册成功'
            // body:users
        }
    }).catch(error=>{
        ctx.body={
            code:500,
            message:error
        }
    })
})
module.exports=router;