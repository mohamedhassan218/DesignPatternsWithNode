class Subject {
    constructor(name) {
        this.name = name;
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(ob => ob !== observer);
    }

    notify(data) {
        this.observers.forEach(ob => ob.update(data));
    }
}

module.exports = Subject;