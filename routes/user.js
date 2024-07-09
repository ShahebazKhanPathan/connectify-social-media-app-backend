const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
    const data = req.body;
    return res.status(200).send(data);
});

module.exports = router;