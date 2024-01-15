// Represents our Pool Interface
class ObjectPool {
    constructor(maxSize, objectFactory) {
        this.maxSize = maxSize;
        this.objectFactory = objectFactory;
        this.pool = [];
    }

    getObject(url, method) {
        if (this.pool.length > 0) {
            return this.pool.pop();
        }

        if (this.pool.length < this.maxSize) {
            return this.objectFactory.create(url, method);
        }

        throw new Error('Object pool exhausted');
    }

    releaseObject(obj) {
        this.pool.push(obj);
    }
}

module.exports = ObjectPool;