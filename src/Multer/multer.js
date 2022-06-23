const multer = require('multer');
/*Multer là một middleware cho Express 
và Nodejs giúp dễ dàng xử lý dữ
 liệu multipart/form-data
  khi người dùng upload file.*/
module.exports = multer({
  
  //cấu hình fileupload  nơi lưu trữ
  storage: multer.diskStorage({}),
  //kiem soat file
  fileFilter: (req, file, cb) => {
      //chi chap nhan duoi
    if (!file.mimetype.match(/jpe|jpeg|png|gif|jpg$i/)) {
      cb(new Error('File is not supported'), false)
      return 
    }

    

    cb(null, true)
  }
})
 