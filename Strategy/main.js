const CreditCardPayment = require('./CreditCardPayment');
const PayPalPayment = require('./PayPalPayment');
const Context = require('./PaymentContext');

// Initiate two different strategies
const creditCardStrategy = new CreditCardPayment();
const paypalStrategy = new PayPalPayment();

// Initiate a context with an initial strategy
const context = new Context(creditCardStrategy);
context.processPayment(100);

// Change the strategy
context.setPaymentStrategy(paypalStrategy);
context.processPayment(100);