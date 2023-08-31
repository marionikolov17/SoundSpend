const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        "status": 200,
        "msg": "Working!"
    });
});

module.exports = app;