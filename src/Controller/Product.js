const Products = require("../Modal/Products");

class ProductControllers{
    async GetProduct(rq,rs) 
    { 
         try{
        const {page,limit}=rq.query;
        const pageCurrent=parseInt(page)||1;
        const limitCurrent=parseInt(limit)||20;
        const start=(pageCurrent-1)*limitCurrent;
        const end=start+limitCurrent;
        const listProductAll=await Products.find({},{__v:0}).sort('createdAt');
        const productPage=listProductAll.splice(start,end);
        rs.json({
            stutus:'sucess',
            start,
             end,
            page:pageCurrent,
            limit:limitCurrent,
            totalProduct:productPage.length,
            products:productPage
     
     
        })

    }  catch(err){
        rs.start(400).json({
            message:err
        })
            
    }
 }

 // se sap xep theo loi tuye vao key va trang hien tai minh dang o la bao nhieu
     //nya loc theo gia 
   async GetProductTypes(rq,rs){
    try{
        const {name,page,limit,price}=rq.query
   
        const pageCurrent=parseInt(page)||1
        const limitCurrent=parseInt(limit)||20
        const nameCurrent=name.trim().toLowerCase()||'';
        //0 la khong sap 1 tang -1 giam;
        const sortPrice=parseInt(price)||0;
        const start=(pageCurrent-1)*limitCurrent;
        const end=start+limitCurrent;
      
        const listProduct=await Products.find({key:nameCurrent},{__v:0}).sort({price:sortPrice});
       
        const listProductFilterPage=listProduct.slice(start,end);
        rs.status(200).json({
            start,
            end,
            page:pageCurrent,
            limit:limitCurrent,
            listProductFilterPage,
            totalProductPage:listProductFilterPage.length
            

        })
    }
    catch(err){
        rs.status(400).json({
            message:err
        })
    }

   }

   //loc theo ngay san xuat
   async getProductNsx(rq,rs){
    try{
        const {NSX,price,page,limit}=rq.query;
        const nsxCurrent=NSX.toLowerCase();
        const priceCurrent=parseInt(price)||0;
        const pageCurrent=parseInt(page);
        const limitCurrent=parseInt(limit);
        const start=(page-1)*limit;
        const end=pageCurrent+limitCurrent;
      
        const listProductnsx=await Products.find({NSX:nsxCurrent},{__v:0}).sort({price:priceCurrent});
        const listProductpage=listProductnsx.slice(start,end);
        rs.status(200).json({
            start,
            end,
            page:pageCurrent,
            limit:limitCurrent,
            listProductpage,
            totalProductPage:listProductpage.length
            

        })
    }
    catch(err){
        rs.status(400).json({
            message:err
        })
    }
   }
   

 async GetProductiD(rq,rs){
    try{
        const {_id}=rq.body
        const Resultproduct_id=await Products.find(_id);
        
        rs.status(200).json(Resultproduct_id);
    }
   catch(err){
    rs.status(400).json({
        message:err
    })
   }
 }
  
}

module.exports=new ProductControllers