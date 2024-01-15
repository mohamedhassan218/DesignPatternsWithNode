// Represents a Concrete Element
const Shape = require("./Shape");

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.area = 0;
    }

    accept(visitor) {
        visitor.visitCircle(this);
    }
}

module.exports = Circle;