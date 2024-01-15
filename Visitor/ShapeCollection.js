// Represents an Object Structure
class ShapeCollection {
    constructor() {
        this.shapes = [];
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

    accept(visitor) {
        this.shapes.forEach(shape => shape.accept(visitor));
    }
}

module.exports = ShapeCollection;