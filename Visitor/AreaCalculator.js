// Represents a Concrete Visitor
const ShapeVisitor = require("./ShapeVisitor");

class AreaCalculator extends ShapeVisitor {
    visitCircle(circle) {
        circle.area = Math.PI * Math.pow(circle.radius, 2);
    }
    visitRectangle(rectangle) {
        rectangle.area = rectangle.width * rectangle.height;
    }
}

module.exports = AreaCalculator;