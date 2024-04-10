// Suppress deprecation warning for the punycode module
process.prependListener('warning', (warning) => {
    if (warning.name === 'DeprecationWarning' && warning.message.includes('punycode')) {
        return;
    }
    console.warn(warning.stack);
});

const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');

const mongoose = require('mongoose');
mongoose.set('strictQuery', false); // Suppress deprecation warning for strictQuery option
mongoose.connect('mongodb://localhost:27017/raresfpv', { useNewUrlParser: true, useUnifiedTopology: true });

// Suppress deprecation warning for the punycode module
process.prependListener('warning', (warning) => {
    if (warning.name === 'DeprecationWarning' && warning.message.includes('punycode')) {
        return;
    }
    console.warn(warning.stack);
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();
// Setting view engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



const{droneSchema} =  require('./schema')
const Drone = require('./models/drone')
// Serve static files from the 'public' directory
app.use(express.static('public'));

// Rendering pages



// //test page
// const test = async()=>{
//     const drone = new Drone({
//         name:'firefighter',
//         engine:'6s',
//         components:'blabla',
//         description:'fast asf'
//     })
//     await drone.save()
// }
// test();
app.use('/test',async(req,res)=>{
    const drones = await Drone.find({});
    res.render('test',{drones})
})


app.use('/homepage', (req, res) => {
    res.render('index');
});

app.use('/contact', (req, res) => {
    res.render('contact');
});

app.use('/invidual', (req, res) => {
    res.render('invidualDronepage');
});

app.use('/dronepage', (req, res) => {
    res.render('dronepage');
});

// Server side stuff
app.listen(3000, () => {
    console.log('Listening on port 3000');
});