// Represents our Client
const Circle = require('./Circle');
const Rectangle = require('./Rectangle');
const ShapeCollection = require('./ShapeCollection');
const AreaCalculator = require('./AreaCalculator')

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

const shapeCollection = new ShapeCollection();
shapeCollection.addShape(circle);
shapeCollection.addShape(rectangle);

const areaCalculator = new AreaCalculator();
shapeCollection.accept(areaCalculator);

console.log(`Circle Area: ${circle.area}`);
console.log(`Rectangle Area: ${rectangle.area}`);