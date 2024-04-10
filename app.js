const express = require('express');
const app = express();

const ejsMate = require('ejs-mate');
//connecting the ejs files
const path = require('path');

app.engine('ejs',ejsMate)
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'))

app.use('/homepage',(req,res)=>{
    res.render('/index')
})


app.listen(3000,()=>{
    console.log('listening on port 3000');
})