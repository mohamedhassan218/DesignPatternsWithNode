// This represents our director.
class Chief {
    constructor(builder) {
        this.builder = builder;
    }

    constructPizza() {
        this.builder.buildDough()
            .buildSauce()
            .buildCheese()
            .buildToppings();
    }

    getPizaa() {
        return this.builder.pizza;
    }
}

module.exports = Chief;