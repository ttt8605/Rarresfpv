const express = require('express');
const app = express();


app.use('/homepage',(req,res)=>{
    res.send('/pages/index.html')
})


app.listen(3000,()=>{
    console.log('listening on port 3000');
})