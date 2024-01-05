const Iterator = require("./Iterator");

// Additional customization for a specific collection can be added here.
class ConcreteIterator extends Iterator {
    // We only add this method to know the current poniter, but you're free.
    getCurrent() {
        return this.current;
    }
}

module.exports = ConcreteIterator;