// Represents a Concrete Handler
const SupportHandler = require("./SupportHandler");

class Level1Support extends SupportHandler {
    handleRequest(ticket) {
        if (ticket.level === 1) {
            console.log("Level 1 Support resolving the ticket.");
        } else {
            super.handleRequest(ticket);
        }
    }
}

module.exports = Level1Support;