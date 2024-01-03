// We implement the singleton pattern on the database connection bool.
// We do that to prevent resource wastage.
class Database {

    constructor() {
        this.connection = null;
    }

    static getConnection() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    connect() {
        this.connection = 'Connected Successfully';
    }
}

module.exports = Database;