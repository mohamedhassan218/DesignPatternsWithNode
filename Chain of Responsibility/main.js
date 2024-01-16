const SupportSystem = require('./SupportSystem');
const SupportTicket = require('./SupportTicket');

const supportSystem = new SupportSystem();

const ticket1 = new SupportTicket(2);
supportSystem.resolveTicket(ticket1);

const ticket2 = new SupportTicket(3);
supportSystem.resolveTicket(ticket2);

const ticket3 = new SupportTicket(5);
supportSystem.resolveTicket(ticket3);