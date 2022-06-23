const nodemailer=require('nodemailer');
const {google}=require('googleapis');
const dotenv=require('dotenv')
dotenv.config()
const {OAuth2}=google.auth
const {MAILING_SERVICE_CLIENT_ID,
    GOOGLE_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    REDIRECT_URI,
    sender_address_email,
    password_email
}=process.env

const OAuth2Client=new OAuth2(
    MAILING_SERVICE_CLIENT_ID,
    GOOGLE_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    REDIRECT_URI
)
const sendMail=(to,url,txt)=>{
    
  
   OAuth2Client.setCredentials({ refresh_token: MAILING_SERVICE_REFRESH_TOKEN });
    const accessToken =  OAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
  
      service: 'gmail',
      //tai khoảng để gửi mail đến người dùng
      auth: {
        type: 'OAuth2',
        user: sender_address_email,
        name: 'Nguyễn Gia Hy ',
        pass: password_email,
        clientId: MAILING_SERVICE_CLIENT_ID,
        clientSecret: GOOGLE_SECRET,
        refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
        accessToken: accessToken
      }
    });

    const mailOptions = {
        //địa chỉ email của mình
        from: sender_address_email,
        //gửi mail đến người dùng
        to: to,
        subject: "Xác minh địa chỉ email của bạn",
        html: `
        <div class="content" 
        style="border:solid 0.5px rgb(222, 218, 218);width: 75%; margin:40px auto; "
        >
       <img style="width:100% ;height: 350px;" src=" https://thuaphatlaihungyen.com/media/tin-tuc/xac-minh-dieu-kien-tha.jpg">
       <div class="content_text_send_mail" 
       style="padding:0rem 1.3rem 1.3rem 1.3rem;"
       >
        <h2 style=" text-transform: uppercase;color: teal;">Click nút bên dưới để kiểm tra hợp lệ </h2>
        <p style="color: gray; line-height:25px">Khi đăng ký thành công hệ thống sẽ gửi một tin nhắn  đến email của  bạn một yêu câu để xác minh xem có phải mail bạn đang sử dụng hay không bạn chỉ cần click  vào nút bên dưới để thực hiện xác minh  </p>
        <a href=${url}  style="background: rgb(247, 8, 4); text-decoration: none; color: white; padding: 10px 20px; margin: 10px auto; display: block; border-radius: 20px; width: 260px; text-align: center;"> ${txt} </a>
       </div>
        </div>
            `
      };

      // https://thuaphatlaihungyen.com/media/tin-tuc/xac-minh-dieu-kien-tha.jpg

      transport.sendMail(mailOptions, (err, inFor) => {
        if (err) return err;
        return inFor
      });
}

module.exports=sendMail
// vans anaheim factory