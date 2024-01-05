const Chief = require('./Chief');
const MargheritaPizzaBuilder = require('./MarheritaPizzaBuilder');

const pizzaBuilder = new MargheritaPizzaBuilder();
const myChief = new Chief(pizzaBuilder);

myChief.constructPizza();

console.log(myChief.getPizaa());