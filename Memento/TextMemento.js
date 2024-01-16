// Represents our Memento
class TextMemento {
    constructor(text) {
        this.text = text;
    }

    getText() {
        return this.text;
    }
}

module.exports = TextMemento;