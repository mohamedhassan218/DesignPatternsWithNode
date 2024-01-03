const CarFactory = require('./CarFactory');

const factory = new CarFactory();

const civic = factory.createCar('civic');
const accord = factory.createCar('accord');
const odyssey = factory.createCar('odyssey');

console.log(civic.model);
console.log(accord.model);
console.log(odyssey.model);