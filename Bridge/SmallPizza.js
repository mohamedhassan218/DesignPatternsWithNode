// Concrete Implementor

const PizzaSize = require("./PizzaSize");

class SmallPizza extends PizzaSize {
    getDescription() {
        return 'SMALL';
    }
}

module.exports = SmallPizza;