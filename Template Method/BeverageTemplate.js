// This represents our Template Class
class BeverageTemplate {
    prepareBeverage() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
        this.finished();
    }

    // Shared by all subclasses without changes
    boilWater() {
        console.log();
        console.log('Boiling Water . . . .  . . . . .');
    }

    // Shared by all subclasses without changes
    pourInCup() {
        console.log('Pouring into cup . . .');
    }

    finished() {
        console.log('You beverage is ready :)');
        console.log();
    }

    // Differs in each subclass
    brew() {
        throw new Error('brew() must be implemented');
    }

    // Differs in each subclass
    addCondiments() {
        throw new Error('addCondiments() must be implemented');
    }
}

module.exports = BeverageTemplate;