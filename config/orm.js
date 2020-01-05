let connection = require("./connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    const arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
      const value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

const orm = {
    selectAll: function(table, cb) {
        const queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    },
    insertOne: function(table, columns, values, cb) {
        const queryString = `INSERT INTO ${table} (${columns.toString()}) VALUES ('${values[0]}', ${values[1]})`;
        // console.log(queryString);
        
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    },
    updateOne: function(table, values, condition, cb) {
        const queryString = `UPDATE ${table} SET ${objToSql(values)} WHERE ${condition}`;
        // console.log(queryString);

        connection.query(queryString, [values, condition], function(err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    }
}

module.exports = orm;