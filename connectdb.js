const mongoose=require('mongoose');
 async function connect(){
     try{
        await mongoose.connect('mongodb+srv://nguyengiahy:youhaveahy123@cluster0.9ac2k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log('thanh cong');
     }
     catch(err){
         console.log(err)
     }
    


}
module.exports =connect