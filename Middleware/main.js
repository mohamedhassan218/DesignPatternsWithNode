const express = require('express');
const middleware = require('./middleware');

const app = express();

// Global Middlewares.
app.use(middleware.middleware1);
app.use(middleware.middleware2);
app.use(middleware.middleware3);

app.get('/', middleware.localMiddleware, (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => console.log('Server Starts'));