const RealSubject = require("./RealSubject");
const Subject = require("./Subject");

class Proxy extends Subject {
    constructor() {
        super();
        this.realSubject = null;
    }

    // A simple spin function to introduce a delay.
    spin(ms) {
        const startTime = new Date().getTime();
        while (new Date().getTime() - startTime < ms);
    }

    request() {
        if (!this.realSubject) {
            // Called only in the first time the client call the proxy.
            console.log('Proxy: creating a real subject instance with a delay of 3 seconds . . . ');
            this.spin(3000);
            this.realSubject = new RealSubject();
            // Forward the request to the real object.
            this.realSubject.request();
        } else {
            this.spin(3000);
            this.realSubject.request();
        }
    }
}

module.exports = Proxy;