const mongoose=require('mongoose');
const moment=require('moment');
const momentFormat=moment().format()
const CommentSchema=mongoose.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId,require:true},
    _id_product:{type:String,require:true},
    _id_user:{type:String,require:true},
    timeComment:{type:String,require:true},
    contentComment:{type:String,require:true},
    reply:{type:Array,require:true},
    name:{type:String,require:true},
    avatar:{type:String,require:true},
  
    role:{type:Number,default:0},
    //so sao danh gia
    star:{type:Number,require:true},
    editComment:{type:Boolean,require:true},
    Product_array:{type:Array,require:true}
})

module.exports=mongoose.model('Comment',CommentSchema)