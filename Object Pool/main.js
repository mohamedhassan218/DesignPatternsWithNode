const webRequestPool = require('./WebRequestPool');

// Instantiate some objects
const req1 = webRequestPool.getObject('www.google.com', 'GET');
const req2 = webRequestPool.getObject('www.facebook.com', 'POST');
const req3 = webRequestPool.getObject('www.linkedin.com', 'PUT');

// Use the objects to ensure they're working
req1.send();    
req2.send();
req3.send();

// Release req1 and req2 back to the pool
webRequestPool.releaseObject(req1);
webRequestPool.releaseObject(req2);
webRequestPool.releaseObject(req3);

const req4 = webRequestPool.getObject('www.youtube.com', 'DELETE');
req4.send();    // prints the data of req3, the last released object