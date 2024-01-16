// Represents our Factory
const ColorFlyweight = require('./ColorFlyweight');

class ColorFlyweightFactory {
    constructor() {
        this.colors = {};
    }

    getColor(name) {
        if (!this.colors[name]) {
            this.colors[name] = new ColorFlyweight(name);
        }
        return this.colors[name];
    }

    getNumberOfColors() {
        return Object.keys(this.colors).length;
    }
}

module.exports = ColorFlyweightFactory;