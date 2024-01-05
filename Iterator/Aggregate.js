class Aggregate {
    createIterator() {
        throw new Error('createIterator() must be implemented by concrete aggregate');
    }
}

module.exports = Aggregate;