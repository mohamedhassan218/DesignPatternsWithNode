const OldSystem = require('./LegacySystem');
const NewSystem = require('./NewSystem');
const SystemAdapter = require('./SystemAdapter');

// Function to test our adapter.
function clientCode(target) {
    console.log(target.newRequest());
}

const oldSystem = new OldSystem();
const newSystem = new NewSystem();
const adaptedSystem = new SystemAdapter(oldSystem);

clientCode(newSystem);
clientCode(adaptedSystem);