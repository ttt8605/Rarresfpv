const Joi = require('joi');

module.exports.droneSchema = Joi.object({
    drone:Joi.object({
       name:Joi.string().required(),
       size:Joi.number().required().min(1),
       specification:Joi.string().required(),
       description:Joi.string().required(),
    }).required()
  }) 

  module.exports.proiectSchema = Joi.object({
   name:Joi.string().required(),
   description:Joi.string().required(),
  })