// Represents our Object
class WebRequest {
    constructor(url, method) {
        this.url = url;
        this.method = method;
    }

    send() {
        console.log(`Sending ${this.method} request to ${this.url} . . .`);
    }
}

module.exports = WebRequest;