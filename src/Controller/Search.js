const Products = require("../Modal/Products");

class SeachControl{
  async  searchProduct(rq,rs){
    try{
          
    
        const {keyword,page,limit}=rq.query;
        const keywordCurrent=keyword.toLowerCase().trim()||'';
        const pageCurrent=parseInt(page);
        const limitCurrent=parseInt(limit);
        const start=(pageCurrent-1)*limitCurrent;
        const end=start+limitCurrent;
        const product = await Products.find({
            $or: [
              { name: { $regex: `${keywordCurrent}.*` } },
              { key: { $regex: `${keywordCurrent}.*` } },
              { description: { $regex: `${keywordCurrent}.*` } },
              { productType: { $regex: `${keywordCurrent}.*` } },
              { collections: { $regex: `${keywordCurrent}.*` } },
              { NSX: { $regex: `${keywordCurrent}.*` } }
            ]
          });

          const productPag=product.slice(start,end);
          rs.status(200).json({
            data:productPag,
            page:pageCurrent,
            limit:limitCurrent,
            lent:productPag.length
          })

        
    }
    catch(err){
        res.send(err)
    }
  }
  
}

module.exports=new SeachControl