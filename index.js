const express = require('express');
const debug = require('debug')('app:startup');
const app = express();
const Joi = require('joi');
Joi.objectId = require('joi-objectid');

require('./startup/db')();
require('./startup/routes')(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => debug(`Listening on port ${port}`));