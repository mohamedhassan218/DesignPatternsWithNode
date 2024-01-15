// Represents a Concrete Prototype [Square]
const Shape = require('./Shape');

class Square extends Shape {
    constructor(side) {
        super("Square");
        this.side = side;
    }

    clone() {
        return new Square(this.side);
    }
}

module.exports = Square;