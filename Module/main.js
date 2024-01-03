const Counter = require('./Counter');

Counter.increment();
Counter.increment();
Counter.increment();

console.log(Counter.getCount());// prints: 3

Counter.decrement();
console.log(Counter.getCount());// prints: 2