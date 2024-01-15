const Coffee = require('./Coffee');
const Tea = require('./Tea');

const coffee = new Coffee();
const tea = new Tea();

console.log("Preparing Coffee . . . ");
coffee.prepareBeverage();

console.log('Preparing Tea . . . ');
tea.prepareBeverage();