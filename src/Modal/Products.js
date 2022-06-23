const mongoose=require('mongoose');
 const moment=require('moment');
 const createAt=moment().format();

// const CreateAt=moment.format();
const ProductSchema=mongoose.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId,
       require:true
    },
    name:{
        type:String,
        require:true
    },
    //kich co san pham
    size:{
        type:Array,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    //so luong reveiew san pham
    numReviews: { type: Number, default: 0 },
    //rating bao nhien nguowi quan tam sp nay so sao tren sang pham
    rating: { type: Number, default: 0 },
    //gioi tinh gianh cho nguoi dung
    sex: { type: String, required: true },
    //mau sac san pham
    color: { type: Array, required: true },
    //nhung cai anh ve san pham
    poster: { type: Array, required: true },
    //mieu ta sang pham
    description: { type: String, required: true },
    //san pham thuoc bo su tap nao
    collections: { type: String, required: true },
    productType: { type: String, required: true },
    //loai cua san pham
    key: { type: String, required: true },
    NSX: { type: String, required: true },
    //ưu đãi 
    endow:{type:String,require:true},
     createdAt: { type: String, default: createAt }

})
module.exports = mongoose.model('product', ProductSchema);