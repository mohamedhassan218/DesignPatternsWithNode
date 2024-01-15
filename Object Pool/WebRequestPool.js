const ObjectPool = require('./ObjectPool');
const WebRequest = require('./WebRequest');

class WebRequestFactory {
    create(url, method) {
        return new WebRequest(url, method);
    }
}

const webRequestFactory = new WebRequestFactory();
const webRequestPool = new ObjectPool(3, webRequestFactory);

module.exports = webRequestPool;