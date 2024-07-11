const express = require('express');
const app = express();
const user = require('../routes/user');
const cors = require("cors");
const error = require('../middlewares/error');
const blacklist = require('../routes/blacklist');

module.exports = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use("/api/user", user);
    app.use("/api/blacklist", blacklist);
    app.use(error);
}

