// Represents a Concrete Class
const BeverageTemplate = require('./BeverageTemplate');

class Coffee extends BeverageTemplate {
    brew() {
        console.log("Dripping coffee throw filter . . . ");
    }

    addCondiments() {
        console.log("Adding sugar and milk . . . . .");
    }
}

module.exports = Coffee;