var express =require('express')
var mongoose=require('mongoose')
var bodyParser=require('body-parser')
var User = require('./src/models/user')


var app = express()
app.use(bodyParser.json())


app.post('/register', (req, res) => {
    var userData=req.body
    var user = new User(userData)
    user.save((err,rslt)=>{
        if(err){
            console.log(err)
            return response.sendStatu(500).send({message:err})
        }
        return res.sendStatus(201)
    })
    
});



mongoose.connect('mongodb+srv://tunahankabakci:d0f0c781ta*@electro-0yznr.gcp.mongodb.net/Products?retryWrites=true&w=majority',(err)=>{

    if(!err){
        console.log('connected to mongoDB')
    }
})

app.listen(8080)
