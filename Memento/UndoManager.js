// Represents our Caretaker

class UndoManager {
    constructor() {
        this.mementos = [];
    }

    saveState(textArea) {
        this.mementos.push(textArea.saveToMemento());
    }

    undo(textArea) {
        if (this.mementos.length > 0) {
            const lastMemento = this.mementos.pop();
            textArea.restoreFromMemento(lastMemento);
        }
    }
}

module.exports = UndoManager;