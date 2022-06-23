const express=require('express');
const Route=express.Router();
const ControllerComent=require('../Controller/Comment');
const {verifyAccessToken}=require('../helpers/jwt_helpers')
Route.get('/getCommentid',ControllerComent.get_Comment_id)
Route.delete('/deleteComentid',verifyAccessToken,ControllerComent.deleteComentid)
module.exports=Route
