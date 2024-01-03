class PizzaDecorator {
    constructor(pizza) {
        this.pizza = pizza;
    }

    addChickenTopping() {
        this.pizza.price += 30;
    }

    addMushroomTopping() {
        this.pizza.price += 25;
    }

    addCheeseTopping() {
        this.pizza.price += 20;
    }
}

module.exports = PizzaDecorator;