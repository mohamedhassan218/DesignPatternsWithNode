// Represents our Originator

const TextMemento = require("./TextMemento");

class TextArea {
    constructor() {
        this.text = "";
    }

    addText(newText) {
        this.text += newText;
    }

    saveToMemento() {
        return new TextMemento(this.text);
    }

    restoreFromMemento(memento) {
        this.text = memento.getText();
    }
}

module.exports = TextArea;