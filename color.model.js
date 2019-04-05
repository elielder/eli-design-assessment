const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Color = new Schema({
    hexCode: {
        type: String
    },
    colorType: {
        type: String
    }
});

module.exports = mongoose.model('Color', Color);