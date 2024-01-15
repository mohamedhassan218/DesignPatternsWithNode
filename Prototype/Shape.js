// Represents the Prototype interface.
class Shape {
    constructor(type) {
        this.type = type;
    }

    clone() {
        throw new Error("clone method must be implemented");
    }
}

module.exports = Shape;