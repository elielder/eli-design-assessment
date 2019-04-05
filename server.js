const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const PORT = process.env.PORT || 4000;

const Color = require('./color.model');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/colors', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('connection established');
})

const colorRoutes = express.Router();

colorRoutes.route('/').get((req, res) => {
    Color.find((err, colors) => {
        if (err) {
            console.log(err);
        } else {
            res.json(colors);
        }
    });
});

colorRoutes.route('/hex/:hexCode').get((req, res) => {
    const hex = req.params.hexCode;
    Color.find({ hexCode: hex }, (err, colors) => {
        if (err) {
            console.log(err);
        } else {
            res.json(colors);
        }
    });
});

colorRoutes.route('/type/:colorType').get((req, res) => {
    const type = req.params.colorType;
    Color.find({ colorType: type }, (err, colors) => {
        if (err) {
            console.log(err);
        } else {
            res.json(colors);
        }
    });
});

app.use('/colors', colorRoutes);

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
});