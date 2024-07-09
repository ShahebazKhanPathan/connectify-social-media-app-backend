const express = require('express');
const app = express();
const user = require('../routes/user');
const cors = require("cors");

module.exports = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use("/api/user", user);
    app.use((err, req, res, next) => {
        res.status(500).send("Something went wrong.");
    });
}

