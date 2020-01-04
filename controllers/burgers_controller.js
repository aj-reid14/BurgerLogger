let express = require("express");
let burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        const hbsObject = {
            burgers: DataCue
        };
        console.log(hbsObject);
        // res.render("index", hbsObject);
    });
});

router.post("/burger", function (req, res) {
    burger.insert(["burger_name", "devoured"], [req.body.burgerName, req.body.isDevoured], function (result) {
        // res.json({id: result.insertId});
    });
});

router.put("/burger/:id", function (req, res) {
    const condition = `id = ${req.params.id}`;
    console.log("condition: ", condition);

    burger.update(
        {
            burger_name: req.body.bugerName,
            devoured: req.body.isDevoured
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        });
});

module.exports = router;