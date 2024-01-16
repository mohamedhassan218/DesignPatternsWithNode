// Represents our Client
const ColorFlyweightFactory = require('./ColorFlyweightFactory');

const colorFactory = new ColorFlyweightFactory();

// Just a helper function to reduce the code in client
function getClientColor(name) {
    const color = colorFactory.getColor(name);
    console.log(`Using color: ${color.getColor()}`);
}

// Define colors
getClientColor('Red');
getClientColor('Red');
getClientColor('Red');
getClientColor('Green');
getClientColor('Brown');

// Although the client define 5 objects, they are internally just 3!
console.log(`Number of unique colors: ${colorFactory.getNumberOfColors()}`);