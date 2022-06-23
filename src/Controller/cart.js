const { default: mongoose, Types } = require("mongoose");
const { findByIdAndUpdate } = require("../Modal/Carts");
const Carts = require("../Modal/Carts");
const User = require("../Modal/User");

class ControllerCart{
  //cai cart laf san pham ma uer mua hang
  async  addToCart(rq,rs){
    try{
      const {_id}=rq.data.id;
      const {address,phone,totalSum,payment,cart}=rq.body;
      const newCart=new Carts({
        _id: new mongoose.Types.ObjectId(),
        id_User:_id,
        address,
        phone,
        totalSum,
        payment,
        success:false,
        cart,
        status_order:true
      })
   const data=   await newCart.save();
      rs.status(200).json({
        data
      })
    }
    catch(err){
      rs.status(400).json({
        message:err
      })
    }
  }

    async deleteCart(rq,rs){
      try{
       
        const {id}=rq.query
      const id_User=rq.data.id._id;
       
        if(!id_User){
        return  rs.json({
            message:'login fail !'
          })
        }
        if(id_User){
          const _id=id;
          const cartIdDelete=await Carts.findByIdAndDelete(_id);
        return  rs.status(200).json({
            message:"xoa thanh cong",
            cartDelete:cartIdDelete
          })
        }
      }
      catch(err){
      return  rs.status(400).json({
          message:err
        })
      }
    }

   async getCartsUser(rq,rs){
      try{
        const {_id}=rq.data.id;
        const {limit,page}=rq.body;
        const pageCurrent=parseInt(page);
        const limitCurretn=parseInt(limit);
        const start=(pageCurrent-1)*limit;
        const end=start+limit;
        
        const id_User=_id
         //neu mot thuoc tinh khong phai la objectId thi minh dung ham find de tiem kiem trong truong do
        const cartResult=await Carts.find({id_User});
        const resultdata=cartResult.slice(start,end);
        // rs.json(cartResult)
        rs.status(200).json({
          data:resultdata,
          lenght:resultdata.length
        })
      }
      catch(err){
        rs.status(400).json({
          message:err
        })
      }
     
    }

    async updateCart(rq,rs){
      try{
        const {address,phone}=rq.body;
        const {_id}=rq.query
        const id_User=rq.data.id._id;
        
        const dataUpdateCart={
          address,
          phone
        }
        const user=await Carts.find({id_User});
        if(user){
          const cartUser=await Carts.findByIdAndUpdate(_id,dataUpdateCart,{new:true});
          rs.status(200).json({
            message:'update success',
            //ben ngoai se tao ra mot cai mang
          cartUpdate:[cartUser]
          })

        }
      }
        catch(err){
          rs.status(400).json({
            message:err
          })
        }
    }

  async  updateStatusOrder(rq,rs){
    try{
      const {status}=rq.body
      const {_id}=rq.query
      const statusUpdate={
        status_order:status,
        success:false

      }
     
      const cartUpdateStatuse=await Carts.findByIdAndUpdate(_id,statusUpdate,{new:true});
      rs.status(200).json({
       message:"update Thanh công",
       data:cartUpdateStatuse
      })
    }
    catch(err){
      console.log(err)
      rs.status(400).json({
        message:err
      })
    }
   

    }

}

module.exports=new ControllerCart