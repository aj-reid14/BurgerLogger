let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "bootySHAKE",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.log(`Connection Error: ${err.stack}`);
        return
    }

    console.log(`Connected as ID: ${connection.threadID}`);
});

module.exports = connection;