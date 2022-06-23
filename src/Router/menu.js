const express=require('express');
const Route=express.Router();
const ControllerMenu=require('../Controller/menu');

Route.get('/getAllMenu',ControllerMenu.getAllMenu)

module.exports=Route
