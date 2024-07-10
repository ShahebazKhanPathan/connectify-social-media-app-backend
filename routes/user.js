const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const User = require('../models/user');

router.post("/", async(req, res, next) => {
    
    // Validate user
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.message);

    // Check if already exists
    const { mobile, email, password } = req.body;
    const user = await User.findOne().or([{ mobile: mobile }, { email: email }]);
    if (user) return res.status(409).send("User already exists.");

    // Check password complexity
    const complexity = passwordComplexity().validate(password);
    if (complexity.error) return res.status(400).send('Password must contain at least 1 upper case letter, 1 lower case letter, 1 number, and 1 symbol.');

    // Add user to database
    const newUser = new User(req.body);
    try {
        const result = await newUser.save();
        res.status(201).send(result);
    }
    catch (err) {
        next(err);
    }
});

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(4).max(50).required(),
        email: Joi.string().min(8).max(100).required(),
        mobile: Joi.string().pattern(new RegExp('^[0-9]{10}$')),
        password: Joi.string().min(8).required(),
    });
    return schema.validate(user);
}

module.exports = router;