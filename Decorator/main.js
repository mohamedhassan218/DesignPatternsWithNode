const SimplePizza = require('./Pizza');
const Decorator = require('./PizzaDecorator');

const pizza = new SimplePizza();
const specialPizza = new Decorator(pizza);

console.log(pizza.getPrice());  // prints: 80

specialPizza.addCheeseTopping();
specialPizza.addChickenTopping();

console.log(pizza.getPrice());  // prints: 130