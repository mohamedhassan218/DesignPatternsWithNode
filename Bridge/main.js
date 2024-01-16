const SmallPizza = require('./SmallPizza');
const MediumPizza = require('./MediumPizza');
const LargePizza = require('./LargePizza');
const MargheritaPizza = require('./MargheritaPizza');
const PepperoniPizza = require('./PepperoniPizza');

const smallPizza = new SmallPizza();
const mediumPizza = new MediumPizza();
const largePizza = new LargePizza();

// Let's order some pizza!
const margheritaPizza = new MargheritaPizza(smallPizza);
const pepperoniPizza0 = new PepperoniPizza(mediumPizza);
const pepperoniPizza1 = new PepperoniPizza(largePizza);

// Small Margherita, two pepperoni one medium and another large, please
margheritaPizza.order();
pepperoniPizza0.order();
pepperoniPizza1.order();