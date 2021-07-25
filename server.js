const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Started on PORT ${PORT}`);
});

console.log('This is the server');