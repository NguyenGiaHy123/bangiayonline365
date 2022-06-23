const express=require('express');
const Route=express.Router();
const ControllerProduct=require('../Controller/Product');
Route.get('/getProduct',ControllerProduct.GetProduct);
Route.get('/getProduct_id',ControllerProduct.GetProductiD);
Route.get('/getProductType',ControllerProduct.GetProductTypes);
Route.get('/nsx',ControllerProduct.getProductNsx);

module.exports =Route