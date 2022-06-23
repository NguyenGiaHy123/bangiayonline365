
//so luong luot xem 
const mongoose=require('mongoose');
const viewSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    View:{type:Number,require:true}
})

module.exports=mongoose.model("ViewSchema",viewSchema);
