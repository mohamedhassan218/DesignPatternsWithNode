// This represents our 'Composite' class.
const MenuComponent = require("./MenuComponent");

class Menu extends MenuComponent {
    constructor(name) {
        super(name);
        this.menuItems = [];
    }

    // We want to be able to add new items.
    add(menuItem) {
        this.menuItems.push(menuItem);
    }

    // We want to be able to remove items.
    remove(menuItem) {
        const index = this.menuItems.indexOf(menuItem);
        // Found in our menu:
        if (index !== -1) {
            // At position 'index', remove 1 item. 
            this.menuItems.splice(index, 1);
        }
    }

    // We want to be able to display all items in our menu.
    display() {
        const result = [];
        for (const menu of this.menuItems) {
            result.push(menu.display());
        }
        // As you say: "Return a string that describes the menu,
        // name, and it contains a list of items separated by commas."
        return `Menu ${this.name} contains: ${result.join(', ')}`;
    }
}

module.exports = Menu;