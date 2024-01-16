// Represents a Handler Interface
class SupportHandler {
    constructor() {
        this.successor = null;
    }

    setSuccessor(successor) {
        this.successor = successor;
    }

    handleRequest(ticket) {
        if (this.successor) {
            this.successor.handleRequest(ticket);
        } else {
            console.log("Ticket not resolved.");
        }
    }
}

module.exports = SupportHandler;