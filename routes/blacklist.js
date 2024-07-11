const express = require('express');
const Blacklist = require('../models/blacklist');
const router = express.Router();

router.get("/", async (req, res, next) => {
    const token = req.header("auth-token");
    try {
        const isBlacklisted = await Blacklist.findOne({ token: token });
        if (isBlacklisted) return res.status(409).send('Token expired.');    
        res.send(token);
    }
    catch (err) {
        next();
    }
});

router.delete("/", async (req, res, next) => {
    const { token } = req.body;
    try {
        const blackListed = await new Blacklist({ token: token }).save();
        res.status(201).send(token);
    }
    catch (err) {
        next();
    }
});

module.exports = router;