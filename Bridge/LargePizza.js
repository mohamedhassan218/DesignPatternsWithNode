// Concrete Implementor

const PizzaSize = require("./PizzaSize");

class LargePizza extends PizzaSize {
    getDescription() {
        return 'LARGE';
    }
}

module.exports = LargePizza;