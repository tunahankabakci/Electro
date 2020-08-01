const express = require('express')
const userRouter = require('./routers/user')
const productRouter = require('./routers/product')
const port = process.env.PORT 
require('./db/db')

const app = express()


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST");
    next();
  });

app.use(express.json())
app.use(userRouter);
app.use(productRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})