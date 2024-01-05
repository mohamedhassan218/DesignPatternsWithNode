class Iterator {
    constructor(collection) {
        this.collection = collection;
        this.current = 0;
    }

    hasNext() {
        return this.current < this.collection.length;
    }

    next() {
        if (this.hasNext()) {
            return this.collection[this.current++];
        }
        return null;
    }
}

module.exports = Iterator;