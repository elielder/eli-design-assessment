const mongoose = require('mongoose');
const Color = require('./colors');

exports.connectDatabase = () => {
    //put this in an env variable
    return mongoose.connect('mongodb://localhost:27017/color-server');
};

exports.models = Color;

