const express = require("express");
const router = express.Router();

const products = [
    {
        id:1,
        name:"Laptop",
        price:1200,
        image:"https://picsum.photos/250?1"
    },
    {
        id:2,
        name:"iPhone",
        price:700,
        image:"https://picsum.photos/250?2"
    },
    {
        id:3,
        name:"Headphones",
        price:180,
        image:"https://picsum.photos/250?3"
    }

];

router.get("/", (req, res) => {
    res.json(products);
});

module.exports = router;