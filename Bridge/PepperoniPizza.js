// Refined Abstraction: represents a specific pizza type [Pepperoni]
const Pizza = require('./Pizza');

class PepperoniPizza extends Pizza {
    constructor(size) {
        super(size);
    }

    order() {
        console.log(`Ordering a ${this.size.getDescription()} Pepperoni pizza`);
    }
}

module.exports = PepperoniPizza;