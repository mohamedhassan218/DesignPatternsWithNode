// Concrete Implementor

const PizzaSize = require("./PizzaSize");

class MediumPizza extends PizzaSize {
    getDescription() {
        return 'MEDIUM';
    }
}

module.exports = MediumPizza;