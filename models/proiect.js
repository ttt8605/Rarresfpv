const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const drone = require('./drone')


const proiectSchema = new Schema({
name:String,
description:String,
drones:[
    {
        type:Schema.Types.ObjectId,
        ref:'drone'
    }
]
})


proiectSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await drone.deleteMany({
            _id: {
                $in: doc.drones
            }
        });
    }
});


module.exports = mongoose.model("proiecte",proiectSchema); 