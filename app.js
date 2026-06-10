const express = require('express');

const app = express();

const name = "CodeTest";

app.get("/", (req, res) => {
    res.send(`Welcome to ShopEase from ${name}!`);
});

module.exports = {app, name};