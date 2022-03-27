const express = require('express');
const { Seller, validate } = require('../models/seller');
const { validateProduct } = require('../models/product');
const router = express.Router();

router.get('/', async(req, res) => {
    res.send(await Seller.find().sort("name"));
});


module.exports = router;