const jwt=require("jsonwebtoken");
const createErorr=require("http-errors");

module.exports={
    signAccessToken:(id)=>{
        console.log(id)
        return new Promise((resolve,reject)=>{
            const options={
                expiresIn:"30d",
            }

            jwt.sign({id},process.env.ACCESS_TOKEN_SECRET,options,(err,token)=>{
                if(err)
                {
                    reject(createErorr.InternalServerError())
                }
                resolve(token)
            })

        })
    },

    signRefreshToken:(id)=>{
        return new Promise((resolve,reject)=>{
            const options={
                expiresIn:"16s"
            }
            jwt.sign({id},process.env.REFRESH_TOKEN_SECRET,(err,token)=>{
                if(err){
                    reject(createErorr.InternalServerError())
                }
                resolve(token)
            })

        })

    },

    //kiem tra Resfeshtoken hop le moi cho truy xuat vao api

    verifyRefreshToken:(refreshToken)=>{
      
        return new Promise((resolve,reject)=>{
            jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,payload)=>{
                if(err) return  reject(createErorr.Unauthorized())

               ///payload.id laf toan bo thong tin nguoi dung nhu username,_id,password...
              resolve(payload.id)
            })
        })

    }
  //kiem tra accesToken hop le moi cho truy xuat vao api
    ,
    verifyAccessToken:(rq,rs,next)=>{
        const token = rq.headers.authorization.split(' ')[1];
      
       
        if(!token){
            return next(createErorr.Unauthorized()) 
        }
        try{
            
            const verified=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
             rq.data=verified
             next();
        }
        catch{
            rs.status(400).send("invalid Token")
        }

    }
}



/*
Khi người dùng call api login đăng nhập thành công, thực hiện tạo accessToken và refreshToken gửi về cho client lưu trữ.
Với những api tiếp theo cần xác thực và bảo vệ, thì chúng ta sẽ yêu cầu người dùng truyền lên accessToken để phía server kiểm tra ok thì mới cho phép api đó hoạt động.
Khi accessToken hết hạn, sẽ sử dụng một api làm mới token, api này sử dụng refreshToken đã tạo ở bước login để làm mới accessToken

*/