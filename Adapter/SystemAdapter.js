// This represents our Adapter class
class SystemAdapter {
    constructor(oldSystem) {
        this.oldSystem = oldSystem;
    }

    // We name the method as it's name in the new system.
    newRequest() {
        // But internally, we call the old method of the old system.
        return this.oldSystem.request() + ' [Adapted Successfully]';
    }
}

module.exports = SystemAdapter;