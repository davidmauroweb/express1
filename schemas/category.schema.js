const Joi = require('joi');

const ProductSchema = Joi.object({
idcategory : Joi.number().integer().min(0).max(255).required(),
description: Joi.string().min(10).max(255).required(),
});

module.exports = ProductSchema
