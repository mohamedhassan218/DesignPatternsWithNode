const Car = require('./Car')

class CarFactory {

    createCar(model) {
        switch (model) {
            case 'civic':
                return new Car('Honda Civic', 20000);
            case 'accord':
                return new Car('Honda Accord', 25000);
            case 'odyssey':
                return new Car('Honda Odyssey', 30000);
            default:
                throw new Error('Unknown model');
        }
    }
}

module.exports = CarFactory;