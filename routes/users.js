const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    const { username, email } = req.body;

    res.status(201).json({
        message: "User registered",
        username,
        email
    });
});

router.post('/login', (req, res) => {
    const { email } = req.body;

    res.status(200).json({
        message: "Login successful",
        email
    });
});

module.exports = router;