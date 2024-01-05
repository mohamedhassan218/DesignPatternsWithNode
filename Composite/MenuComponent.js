// This represents our 'Component' class.
class MenuComponent {
    constructor(name) {
        this.name = name;
    }

    add() {
        throw new Error('Add method hasn\'t been implemented');
    }
    remove() {
        throw new Error('Remove method hasn\'t been implemented');
    }
    display() {
        throw new Error('Display method hasn\'t been implemented');
    }
}

module.exports = MenuComponent;