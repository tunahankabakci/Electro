var mongoose =require('mongoose')
var Schema = mongoose.Schema;


var userSchema=new Schema({
    userName:String,
    userLastname:String,
    userEmail:String,
    userPassword:String,
    userPhoneNumber:String,
})


var User = mongoose.model('User',userSchema)
module.exports=User
