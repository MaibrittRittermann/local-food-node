const express = require('express');
const seller = require('../routes/seller');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/seller', seller);
};