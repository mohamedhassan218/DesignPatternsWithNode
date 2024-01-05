// This represents the 'Leaf' class.

const MenuComponent = require("./MenuComponent");

class MenuItem extends MenuComponent {
    constructor(name, price) {
        super(name);
        this.price = price;
    }

    // Only need to be displayed.
    display() {
        return `${this.name} - $${this.price}`;
    }
}

module.exports = MenuItem;