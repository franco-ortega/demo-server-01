require('dotenv').config()
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

console.log('This is the app!');

app.get('/hello', (req, res) => {
    try {
        res.send('hello there!');
    }
    catch(err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/data', (req, res) => {
    try {
        res.json({
            name: 'fluffy',
            weight: 6,
            friends: [
                {
                name: 'lu',
                weight: 5
                },
                {
                name: 'bille',
                weight: 8
                }
            ]
        });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
})

module.exports = app;