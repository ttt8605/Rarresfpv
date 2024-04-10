const Joi = require('joi');

module.exports.droneSchema = Joi.object({
    drone:Joi.object({
       name:Joi.string().required(),
       engine:Joi.string().required(),
       components:Joi.string().required(),
       description:Joi.string().required(),
    }).required()
  }) 