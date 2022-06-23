const express=require('express');
const Route=express.Router();
const conTrollerAdmin=require('../Controller/Admin');
const upload=require('../Middleware/cloudinaryConfig');
const {verifyAccessToken}=require('../helpers/jwt_helpers');
Route.post('/addProduct'/*, upload.array('poster')*/,verifyAccessToken,conTrollerAdmin.addProduct);
module.exports=Route