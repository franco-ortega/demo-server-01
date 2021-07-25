const app = require('./app');

app.listen(1234, () => {
    console.log('started on PORT 1234');
});

console.log('This is the server');