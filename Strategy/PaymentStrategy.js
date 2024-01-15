// Represents Strategy Interface
class PaymentStrategy {
    pay(amount) {
        throw new Error('Must be overriden in concrete strategies');
    }
}

module.exports = PaymentStrategy;