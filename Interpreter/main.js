// Represents our Client
const Capital = require('./Capital');
const Small = require('./Small');
const Context = require('./Context');

const capitaExpression = new Capital();
const smallExpression = new Small();

const context = new Context('Hello Interpreter Pattern!');

console.log(`Original Input: ${context.getInput()}`);
console.log(`After CAPITAL Expression: ${capitaExpression.interpret(context.getInput())}`);
console.log(`After small Expression: ${smallExpression.interpret(context.getInput())}`);