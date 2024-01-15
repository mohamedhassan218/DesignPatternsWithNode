// Represents a Concrete Strategy
const PaymentStrategy = require('./PaymentStrategy');

class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid ${amount} using Credit Card`);
    }
}

module.exports = CreditCardPayment;