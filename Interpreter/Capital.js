// Concrete Expression
const AbstractExpression = require('./AbstractExpression');

class Capital extends AbstractExpression {
    interpret(context) {
        // Add your logic here.

        // To simplify, we just return the uppercase of our text
        return context.toUpperCase();
    }
}

module.exports = Capital;