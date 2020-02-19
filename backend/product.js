var mongoose =require('mongoose')
var Schema = mongoose.Schema;


var productSchema=new Schema({
    productNumber:String,
    productName:String,
    productCategory:String,
    productPriceFirst:String,
    productPriceLast:String,
    productQty:Number,
    productDescription:String,
    productImgUrl:[String],
    productReview:String,
    productBrand:String
})


var Product = mongoose.model('Product',productSchema)
module.exports=Product
