class Observer {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} just recieved ${data}.`);
    }
}

module.exports = Observer;