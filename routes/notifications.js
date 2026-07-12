const express = require("express");

const router = express.Router();

router.post("/email", (req, res) => {

    const { email } = req.body;

    res.json({

        success: true,

        message: `Confirmation email sent to ${email}`

    });

});

router.post("/sms", (req, res) => {

    const { phone } = req.body;

    res.json({

        success: true,

        message: `SMS sent to ${phone}`

    });

});

module.exports = router;