// Represents our Context
class Context {
    constructor(input) {
        this.input = input;
    }

    getInput() {
        return this.input;
    }

    setInput(input) {
        this.input = input;
    }
}

module.exports = Context;