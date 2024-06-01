const Joi = require('joi');
module.exports=listingSchema=Joi.object({
    
        title:Joi.string().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        price:Joi.number().required().min(1),
        country:Joi.string().required(),
        image:Joi.object({filename:Joi.string(),
                url:Joi.string().allow("",null)})
})

