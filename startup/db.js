const mongoose = require("mongoose");
const config = require("config");

module.exports = () => {
    mongoose.connect(config.get("adminConfig.dbHost"))
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.log(err.message));
}