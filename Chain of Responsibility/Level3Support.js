// Represents a Concrete Handler
const SupportHandler = require("./SupportHandler");

class Level3Support extends SupportHandler {
    handleRequest(ticket) {
        if (ticket.level === 3) {
            console.log("Level 3 Support resolving the ticket.");
        } else {
            super.handleRequest(ticket);
        }
    }
}

module.exports = Level3Support;