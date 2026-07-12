const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {

    const { amount, paymentMethod } = req.body;

    if (!amount || !paymentMethod) {

        return res.status(400).json({
            success: false,
            message: "Payment details are missing."
        });

    }

    res.status(200).json({

        success: true,
        transactionId: Date.now(),

        amount,

        paymentMethod,

        message: "Payment Successful"

    });

});

module.exports = router;