const Subject = require("./Subject");

class RealSubject extends Subject {
    request() {
        console.log('RealSubject: processing . . . ');
    }
}

module.exports = RealSubject;