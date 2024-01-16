// Represents a Colleague
class User {
    constructor(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }

    sendMessage(message) {
        console.log(`${this.name} sending message: ${message}`);
        this.mediator.sendMessage(message, this);
    }

    recieveMessage(message, sender) {
        console.log(`${this.name} received message ${message} from ${sender.name}`);
    }
}

module.exports = User;