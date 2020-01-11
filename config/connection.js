let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "y26k70yumntromjy",
    password: "zxz1bn68g9l9pjkk",
    database: "b6ijswtb4jqruurb"
});

connection.connect(function (err) {
    if (err) {
        console.log(`Connection Error: ${err.stack}`);
        return
    }

    console.log(`Connected as ID: ${connection.threadId}`);
});

module.exports = connection;