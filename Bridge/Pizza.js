// Abstraction: Pizza
class Pizza {
    constructor(size) {
        this.size = size;
    }

    order() {
        console.log(`Ordering a ${this.size.getDescription()} pizza`);
    }
}

module.exports = Pizza;