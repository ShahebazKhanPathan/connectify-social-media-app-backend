const express = require("express");
const app = express();
require('./startup/db')();

app.listen(3000, () => {
    console.log("Listening on PORT 3000");
});