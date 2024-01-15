// Represents a Concrete Class
const BeverageTemplate = require('./BeverageTemplate');

class Tea extends BeverageTemplate {
    brew() {
        console.log("Steeping the tea . . . . . . . .");
    }

    addCondiments() {
        console.log("Adding lemon . . . .");
    }
}

module.exports = Tea;