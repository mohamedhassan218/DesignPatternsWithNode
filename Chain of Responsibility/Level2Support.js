// Represents a Concrete Handler
const SupportHandler = require("./SupportHandler");

class Level2Support extends SupportHandler {
    handleRequest(ticket) {
        if (ticket.level === 2) {
            console.log("Level 2 Support resolving the ticket.");
        } else {
            super.handleRequest(ticket);
        }
    }
}

module.exports = Level2Support;