const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.use('/homepage', (req, res) => {
    res.render('index');
});

app.use('/contact',(req,res)=>{
    res.render('contact');
})
app.use('/invidual', (req, res) => {
    res.render('invidualDronepage');
});

app.use('/dronepage',(req,res)=>{
    res.render('dronepage');
})




app.listen(3000, () => {
    console.log('listening on port 3000');
});