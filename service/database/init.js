const mongoose =  require('mongoose')
const db = "mongodb://localhost/reactkoa"
const glob = require('glob');
const {resolve} = require('path')
//这个是为了引入 模型
exports.initSchema = () => {
    glob.sync(
        resolve(__dirname,'./schema/','**/*.js')
    ).forEach(require)
}
//   写法一
// mongoose.Promise = global.Promise
// exports.connect = ()=>{
//     mongoose.connect(db)
//     mongoose.connection.on('disconnected',()=>{
//         mongoose.connect(db)
//     })
//     mongoose.connection.on('error',()=>{
//         console.log(err);
//         mongoose.connect(db)
//     })
//     mongoose.connection.once('open',()=>{
//         console.log('mongodb connected successfully')
//     })
// }

//   写法二
exports.connect = ()=>{
    mongoose.connect(db);
    let maxConnectTimes = 0;
    return new Promise((resolve,reject)=>{
        mongoose.connection.on('disconnected',()=>{
            console.log('**************数据库断开**************')
            if(maxConnectTimes<3){
                maxConnectTimes++;
                mongoose.connect(db)
            }else{
                reject()
                throw new Error('数据库出现问题，请处理')
            }
        })
        mongoose.connection.on('error',err=>{
            console.log('*************数据库错误**************')
            if(maxConnectTimes<3){
                maxConnectTimes++;
                mongoose.connect(db)
            }
        })
        mongoose.connection.once('open',()=>{
            console.log('mongodb connected successfully')
            resolve()
        })
    })
}