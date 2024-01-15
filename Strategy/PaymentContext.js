// Represents a Context
class PaymentContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setPaymentStrategy(strategy) {
        this.strategy = strategy;
    }

    processPayment(amount) {
        this.strategy.pay(amount);
    }
}

module.exports = PaymentContext;