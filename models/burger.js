let orm = require("../config/orm.js");

const burger = {
    all: function() {
        orm.selectAll("burgers");
    },
    insert: function(columns, values) {
        orm.insertOne("burgers", columns, values);
    },
    update: function(values, condition) {
        orm.updateOne("burgers", values, condition);
    }
}

module.exports = burger;