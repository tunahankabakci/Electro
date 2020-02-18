var express =require('express')
var mongoose=require('mongoose')
var bodyParser=require('body-parser')



var app = express()
app.use(bodyParser.json())


mongoose.connect('mongodb+srv://tunahankabakci:d0f0c781ta*@electro-0yznr.gcp.mongodb.net/Products?retryWrites=true&w=majority',(error)=>{

    if(!error){
        console.log('connected to mongoDB')
    }
})

app.listen(8080)