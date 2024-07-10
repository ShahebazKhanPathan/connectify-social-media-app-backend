const express = require('express');
const app = express();
const user = require('../routes/user');
const cors = require("cors");
const error = require('../middlewares/error');

module.exports = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use("/api/user", user);
    app.use(error);
}

