// This represents our Command Interface
class Command {
    execute() {
        throw new Error('execute() must be implemented :(');
    }
}

module.exports = Command;