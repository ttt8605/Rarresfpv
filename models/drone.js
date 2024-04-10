const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const droneSchema = new Schema({
name:String,
engine:String,
components:String,
description:String
})

module.exports = mongoose.model("drones",droneSchema); 