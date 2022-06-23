const mongoose=require('mongoose');

const menuSchema=mongoose.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId,require:true},
    Adidas:{type:Array,require:true},
    
    Nike:{type:Array,require:true},
    NewBalance:{type:Array,require:true},
    
    Vans:{type:Array,require:true},

    Puma:{type:Array,require:true},
    Converse:{type:Array,require:true}
})

module.exports=mongoose.model('Menus',menuSchema)