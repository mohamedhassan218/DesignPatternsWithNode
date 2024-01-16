// Represents a Mediator
class ChatMediator {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    sendMessage(message, sender) {
        this.users.forEach(user => {
            // Broadcast the message to all users expect the sender
            if (user !== sender) {
                user.recieveMessage(message, sender);
            }
        });
    }
}

module.exports = ChatMediator;