// Represents a Concrete Flyweight (the shared object)
class ColorFlyweight {
    constructor(name) {
        this.name = name;
    }

    getColor() {
        return this.name;
    }
}

module.exports = ColorFlyweight;