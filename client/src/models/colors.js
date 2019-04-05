const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    hexCode: {
        type: String,
        unique: true
    },
    //I am sure I can just tell the color by hex code somehow, but I can't think of the best way to do that as of now
    colorType: {
        type: String,
    }
});

exports.Color = mongoose.model('Color', colorSchema);