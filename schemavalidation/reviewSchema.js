const Joi = require('joi');

module.exports=reviewSchema=

    Joi.object({
          rating:Joi.number().required().min(0).max(5),
         comment:Joi.string().required()
        });
  






