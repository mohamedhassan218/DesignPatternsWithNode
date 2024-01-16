const Mediator = require('./ChatMediator');
const User = require('./User');

const mediator = new Mediator();

const user1 = new User('Ahmed', mediator);
const user2 = new User('Mohamed', mediator);
const user3 = new User('Alaa', mediator);
const user4 = new User('Abdelrahman', mediator);

mediator.addUser(user1);
mediator.addUser(user2);
mediator.addUser(user3);
mediator.addUser(user4);

user1.sendMessage('Hello everyone!');
user2.sendMessage('Hi, prof');