let orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insert: function(columns, values, cb) {
        orm.insertOne("burgers", columns, values, function(res) {
            cb(res);
        });
    },
    update: function(values, condition, cb) {
        orm.updateOne("burgers", values, condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;