const mongoose=require('mongoose');
const moment=require('moment');
const createAt=moment().format();
const Schema=mongoose.Schema;
const useSchema=new Schema({
    _id:mongoose.Types.ObjectId,
    name:{
        type:String,
        require:true
    }
    ,
    email:{
        type:String,
        require:true
    }
    ,
    password:{
        type:String,
        require:true
    },
    role:{
        type:Number,
        require:true
    }
    ,
    avatar:{
        type:String,
        default:'https://png.pngtree.com/png-vector/20190919/ourlarge/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1742031.jpg'
    },
    CreateAt:{
        type:String,
        default:createAt
    }

})
module.exports=mongoose.model("userSchema",useSchema);