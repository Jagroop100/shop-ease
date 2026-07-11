const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { userId, products } = req.body;

    res.status(201).json({
        message: "Order created",
        userId,
        products
    });
});

module.exports = router;