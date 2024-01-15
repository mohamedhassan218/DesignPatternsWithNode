// This represents our Client
const Circle = require('./Circle');
const Square = require('./Square');

const originalCircle = new Circle(5);
const clonedCircle = originalCircle.clone();

const originalSquare = new Square(4);
const clonedSquare = originalSquare.clone();

console.log(originalCircle);
console.log(clonedCircle);

console.log(originalSquare);
console.log(clonedSquare);