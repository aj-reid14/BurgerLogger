let connection = require("./connection.js");

const orm = {
    selectAll: function(table) {
        const queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(table, columns, values) {
        const queryString = `INSERT INTO ${table} (${columns.toString()}) VALUES (?)`;
        console.log(queryString);
        
        connection.query(queryString, values, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(table, value, condition) {
        const queryString = `UPDATE ${table} SET devoured = ? WHERE id = ?`;
        console.log(queryString);

        connection.query(queryString, [value, condition], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;