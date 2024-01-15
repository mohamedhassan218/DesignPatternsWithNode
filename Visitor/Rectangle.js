// Represents another Concrete Element
const Shape = require("./Shape");

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.area = 0;
    }

    accept(visitor) {
        visitor.visitRectangle(this);
    }
}

module.exports = Rectangle;