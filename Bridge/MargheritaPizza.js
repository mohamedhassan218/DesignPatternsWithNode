// Refined Abstraction: represents a specific pizza type [Margherita]
const Pizza = require('./Pizza');

class MargheritaPizza extends Pizza {
    constructor(size) {
        super(size);
    }

    order() {
        console.log(`Ordering a ${this.size.getDescription()} Margherita pizza`);
    }
}

module.exports = MargheritaPizza;