// Represents a Concrete Prototype [Circle]
const Shape = require('./Shape');

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    clone() {
        return new Circle(this.radius);
    }
}

module.exports = Circle;