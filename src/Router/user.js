const express=require('express');
const userController = require('../Controller/userController');
const Route=express.Router();
const   controllerUser=require('../Controller/userController');
const upload=require('../Multer/multer')
const fileupload=require('../Middleware/cloudinaryConfig')
const {verifyAccessToken} =require('../helpers/jwt_helpers')
Route.post('/register',controllerUser.userRegisTer);
Route.put("/change-password",verifyAccessToken,controllerUser.userChangPassword);
Route.post("/login",controllerUser.userLogin)
Route.post("/google-login",userController.userLoginGoogle);
Route.post("/Facebook-login",userController.userLoginFacebook)
Route.get("/getProfile",verifyAccessToken,controllerUser.userGetProfile);
Route.post("/refresh-token",controllerUser.userResFesToken);
//uploade single sex upload mot file don le phia client gui len ten la avatar
//cos verifile thi trong controller moi lay dc rq.body vs data login laf rq.data khong sex bao loi
Route.put("/update-image",fileupload.single("avatar"),verifyAccessToken,controllerUser.userUploadImage);
Route.put("/update-information",verifyAccessToken,controllerUser.userUpdateInformation);
Route.post("/active-email",controllerUser.userActiveEmail);
Route.post("/forgot-password",userController.userForgetPassword);
Route.put("/resetPassword",userController.userResetPassword)
module.exports=Route