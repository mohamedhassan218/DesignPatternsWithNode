const Database = require('./database')

const db1 = Database.getConnection();
const db2 = Database.getConnection();

// The two references are binded to the same object. 
console.log(db1 === db2);

db1.connect();


console.log(db2.connection);
console.log(db1.connection);