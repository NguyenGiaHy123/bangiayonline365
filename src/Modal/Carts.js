const mongoose=require('mongoose');
const moment=require('moment');
const momentFormat=moment().format()
const CartsSchema=mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id_User: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
  totalSum: { type: Number, required: true },
  timeCart: { type: String, default: momentFormat },
  cart: { type: Array, required: true },
  payment: { type: String, required: true },
  success: { type: Boolean, required: true },
  status_order: { type: Boolean, required: true },
 
})
module.exports = mongoose.model('Cart', CartsSchema);