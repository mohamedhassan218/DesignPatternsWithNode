const TextArea = require('./TextArea');
const UndoManager = require('./UndoManager');

const textArea = new TextArea();
const undoManager = new UndoManager();

// Type on our text area
textArea.addText('Hello ');

// Save the state
undoManager.saveState(textArea);

// Type more
textArea.addText('Memento!');

console.log(textArea.text);     // Hello Memento!

// Undo adding 'Memento!'
undoManager.undo(textArea);
console.log(textArea.text);     // Hello