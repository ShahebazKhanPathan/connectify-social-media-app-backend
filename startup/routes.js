const express = require('express');
const app = express();
const user = require('../routes/user');

module.exports = (app) => {
    app.use("/user", user);
}

