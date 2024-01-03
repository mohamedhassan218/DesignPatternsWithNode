function middleware1(req, res, next) {
    console.log('Hello, Middleware I is speaking');
    next();
}

function middleware2(req, res, next) {
    console.log('Hello, Middleware II is speaking');
    next();
}

function middleware3(req, res, next) {
    console.log('Hello, Middleware III is speaking');
    next();
}

function localMiddleware(req, res, next) {
    // Local according to the route.
    console.log('Hello, local middleware is speaking');
    next();
}

module.exports = { middleware1, middleware2, middleware3, localMiddleware };