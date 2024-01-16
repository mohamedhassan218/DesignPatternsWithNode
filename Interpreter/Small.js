// Concrete Expression
const AbstractExpression = require('./AbstractExpression');

class Small extends AbstractExpression {
    interpret(context) {
        // Add your logic here.

        // To simplify, we just return the lowercase of our text
        return context.toLowerCase();
    }
}

module.exports = Small;