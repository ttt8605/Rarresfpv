const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const droneSchema = new Schema({
name:String,
size:Number,
description:String,
specification:String,
})

module.exports = mongoose.model("drones",droneSchema); 