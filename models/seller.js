const mongoose = require('mongoose');
const Joi = require('joi');
const {productSchema} = require('./product');

const Farmer = mongoose.model('Seller', new mongoose.Schema({
    name: { type: String, required: true, minlength: 2, maxlength: 255 },
    address: { type: String, required: true },
    zip: { type: Number, required: true, min: 1000, max: 9999 },
    city: { type: String, required: true, minlength: 2 },
    products: [productSchema]
}));

function validateFarmer(seller) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      address: Joi.string().min(3).required(),
      zip: Joi.number().min(1000).max(9999).required(),
      city: Joi.string().min(3).required(),
      products: Joi.allow(),
    });
  
    return schema.validate(seller);
  }
  
  module.exports.Farmer = Farmer;
  module.exports.validate = validateFarmer;