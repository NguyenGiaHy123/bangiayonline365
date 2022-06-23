const express=require('express');
const Route=express.Router();
const controllerCart=require('../Controller/cart');
const {verifyAccessToken}=require('../helpers/jwt_helpers')
Route.post('/addToCart',verifyAccessToken,controllerCart.addToCart);
Route.delete('/deleteCart',verifyAccessToken,controllerCart.deleteCart);
Route.get('/getCart',verifyAccessToken,controllerCart.getCartsUser);
Route.put('/updateCart',verifyAccessToken,controllerCart.updateCart)
Route.put('/updateStatus',verifyAccessToken,controllerCart.updateStatusOrder)
module.exports=Route