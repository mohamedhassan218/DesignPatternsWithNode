// Represents a Concrete Strategy
const PaymentStrategy = require("./PaymentStrategy");

class PayPalPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid ${amount} using PayPal`);
    }
}

module.exports = PayPalPayment;