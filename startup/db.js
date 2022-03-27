const config = require("config");
const mongoose = require('mongoose');
const debug = require('debug')('app:db');

module.exports = function() {
    const db = config.get(db);
    mongoose.connect(db)
        .then(() => debug('Connected to db'))
        .catch((err) => debug(`Connection failed: ${err}`));
};