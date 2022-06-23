const Comment=require('../Modal/Comment')
const product=require('../Modal/Products')
const mongoose=require('mongoose')
const moment=require('moment');
const User = require('../Modal/User');
const momentFormat=moment().format()
class CommentController{
    async get_Comment_id(rq,rs) {
        try{
        const {_id_product}=rq.query
        const {page,limit}=rq.body
        const pageCurrent=parseInt(page)||1;
        const limitCurrent=parseInt(limit)||5;
        const start=(pageCurrent-1)*limit;
        const end=start+limitCurrent;
        const products=await product.find({_id_product}).sort('createdAt');
        //nó sẽ giới hạn comment nếu như khúc trên là 10 comment thì khi nhâns xem thêm sẽ chuyển 10 comment tiếp theo lên trên
        const commentOnProduct=await Comment.find({_id_product}).sort('createdAt');
        const dataComment=commentOnProduct.slice(0,end);
        const oneStars=await Comment.find({_id_product,star:1});
        const twoStart=await Comment.find({_id_product,star:2});
        const threeStart=await Comment.find({_id_product,star:3});
        const fourStar=await Comment.find({_id_product,star:4})
        const fiveStar=await Comment.find({_id_product,star:5});
        const starRating={
            oneStars:oneStars.length,
            twoStart:twoStart.length,
            threeStart:threeStart.length,
            fourStar:fourStar.length,
            fiveStar:fiveStar.length

        }
        //moi lo n onestar la 1 com sumRating la tong tat ca so sao cong lai
        const sumRating=oneStars.length+twoStart.length+threeStart.length+fourStar.length+fiveStar.length;
        rs.status(200).json({            
            dataComment:dataComment,
            numberComment:commentOnProduct.length,
            sumRating:sumRating,
            //danh gia trung binh
            reviewRating:products.rating>0?(products.rating/sumRating):0,
            page:pageCurrent, 
            limit:limitCurrent,
            start:0,
            end,
            starRating
        })
    }
    catch(err){
        rs.status(400).json({
            message:err
        })
    }
    }
    //update lai coment rating,start ,numberreview sau khi xoa

    async deleteComentid(rq,rs){
        try{
            const id=rq.data;
        const {_id,id_comment}=rq.query;
        const user=await User.findById(id._id);
        const dataproduct=await product.find(_id_product);
        const comment=await Comment.find(id_comment);
        if(!user){
          return  rs.json({
                message:"login before ! "
            })

        }
        
        const dataRating={
            rating:dataproduct.rating-comment.star,
            numReviews:numReviews-1
        }
        const resultUpdateProduct=await product.findByIdAndUpdate(_id,{dataRating},{new:true});
        rs.status(200).json({
            resultUpdateProduct,
            comment
        })
        }
        catch(err){
            rs.status(400).json({
                message:err
            })
        }
        
    }

    async HistoryComment(rq,rs){
        try{
        const {_id}=rq.data.id;
        const {page,limit}=rq.data;
        const pageCurrent=parseInt(page)||1;
        const limitCurrent=parseInt(limit)||5;
        const start=(pageCurrent-1)*limit;
        const end=start+limitCurrent;
        const user=await User.findById(_id);
         const userId={
            _id_user:_id
         }

        
        if(!user){
          return  rs.status(400).json({
                message:err
            })
        }

        const commentOnProduct=await Comment.find({userId}).sort('createdAt');
        const dataComment=commentOnProduct.slice(0,end);
        rs.status(200).json({
            user,
            page,
            limit,
            start:0,
            lenthData:commentOnProduct.length,
            data:dataComment
            
        })
    }
    catch(err){
        rs.status(400).json({
            message:err
        })
    }
        
    }




    


    
}


    



module.exports=new CommentController