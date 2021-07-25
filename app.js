require('dotenv').config()
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

console.log('This is the app!');

app.get('/cats', (req, res) => {
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
                },
                {
                name: 'po',
                weight: 7
                }
            ]
        });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
})

app.get('/meow', (req, res) => {
    try {
        res.send('Meeeeeoooooowwwww!');
    }
    catch(err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/kitten', (req, res) => {
    try {
        res.send(
            `<!DOCTYPE>
                <html>
                    <head>
                        <title>Kitten</title>
                    </head>
                    <body>
                        <h1 style="color:grey">Kitten!</h1>
                        <img src="https://placekitten.com/500/600" alt="grey kitten">
                    </body>
                </html>
            `
        );
    }
    catch(err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = app;
