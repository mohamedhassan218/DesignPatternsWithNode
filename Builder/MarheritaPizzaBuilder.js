// This represents our concrete builder.
const PizzaBuilder = require("./PizzaBuilder");

class MargheritaPizzaBuilder extends PizzaBuilder {
    constructor() {
        super();
        this.pizza = {
            dough: '',
            sauce: '',
            cheese: '',
            toppings: [],
        };
    }

    buildDough() {
        this.pizza.dough = 'Thin Crust';
        return this;    // To allow method chaining.
    }

    buildSauce() {
        this.pizza.sauce = 'Tomato Sauce';
        return this;
    }

    buildCheese() {
        this.pizza.cheese = 'Mozzarella';
        return this;
    }

    buildToppings() {
        this.pizza.toppings.push('Basil Leaves');
        return this;
    }

    getPizza() {
        return this.pizza;
    }
}

module.exports = MargheritaPizzaBuilder;