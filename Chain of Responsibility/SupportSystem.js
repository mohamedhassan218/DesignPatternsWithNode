// Class to wrap up the system processes
const Level1Support = require('./Level1Support');
const Level2Support = require('./Level2Support');
const Level3Support = require('./Level3Support');

class SupportSystem {
    constructor() {
        this.handlerChain = new Level1Support();
        const level2Support = new Level2Support();
        const level3Support = new Level3Support();

        this.handlerChain.setSuccessor(level2Support);
        level2Support.setSuccessor(level3Support);
    }

    resolveTicket(ticket) {
        this.handlerChain.handleRequest(ticket);
    }
}

module.exports = SupportSystem;