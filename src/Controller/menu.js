const { set } = require("mongoose");
const Products = require("../Modal/Products");

class Menu{
  async  getAllMenu(rq,rs){
    try{
      const NXSAdidas=[],
         NXSNike=[],
         NXSNewBalance=[],
          NXSVans=[],
         NXSPuma=[],
         NXSConverse=[];

         const Adidas=await Products.find({key:'adidas'});
         const Nike=await Products.find({key:'nike'});
         const NewBalance=await Products.find({key:'newbalance'});
         const Vans=await Products.find({key:'vans'});
         const Puma=await Products.find({key:'puma'});
         const Converse=await Products.find({key:'converse'});

         Adidas.forEach((value)=>{
          NXSAdidas.push(value.NSX)
         })
         
         Nike.forEach((value)=>{
          NXSNike.push(value.NSX)
         })

         NewBalance.forEach((value)=>{
          NXSNewBalance.push(value.NSX)
         })

         Vans.forEach((value)=>{
          NXSVans.push(value.NSX)
         })
       

         
         Puma.forEach((value)=>{
          NXSPuma.push(value.NSX)
         })

         Converse.forEach((value)=>{
          NXSConverse.push(value.NSX)
         })

         rs.json({
          //tra ve mot mang ma cac gia tri duy nhat khong trung nhau
          Adidas: [... new Set(NXSAdidas)],
          Nike: [... new Set(NXSNike)],
          NewBalance: [... new Set(NXSNewBalance)],
          Vans: [... new Set(NXSVans)]
          ,
          Puma: [... new Set(NXSPuma)],
          Converse: [... new Set(NXSConverse)]
         })
    }

    catch(err){
      res.send(createError(404, 'no product found'))
    }
      

    }

}
module.exports=new Menu
// Adidas
// adidas stan smith
// adidas superstar
// adidas yeezy
// adidas ultraboost
// adidas prophere
// adidas nmd
// adidas alphabounce

// Nike
// nike jordan
// nike m2k tekno
// nike cortez
// nike air max

// NewBalance
// new balance

// Vans
// vans anaheim factory
// vans era
// vans sneaker
// vans sk8 hi

// Puma
// puma rsx
// puma rsx puzzle
// puma rsx super

// Converse
// converse chuck 70
// converse renew
// converse sneakers


