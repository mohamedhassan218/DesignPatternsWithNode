const Aggregate = require("./Aggregate");
const ConcreteIterator = require("./ConcreteIterator");

class ConcreteAggregate extends Aggregate {
    constructor(collection) {
        super();
        this.collection = collection;
    }

    createIterator() {
        return new ConcreteIterator(this.collection);
    }
}

module.exports = ConcreteAggregate;