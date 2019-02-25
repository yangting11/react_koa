const mongoose = require('mongoose');
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
const userSchema = new Schema({
    UserId:ObjectId,
    userName:{
        unique:true,
        type:String
    },
    password:String,
    creatAt:{
        type:Date,
        default:Date.now()
    },
    lastLoginAt:{
        type:Date,
        default:Date.now()
    }
})
mongoose.model('User',userSchema)