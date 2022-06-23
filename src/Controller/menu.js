const menu=require('../Modal/menu')
class Menu{
  async  getAllMenu(rq,rs){
    try{
      const menudata=await menu.findOne({});
      return  rs.json(menudata)
    }

    catch(err){
      rs.status(400).json({
        msg:err
      })
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


