const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
const paymentRoutes = require("./routes/payment");
const notificationRoutes = require("./routes/notifications");

app.use("/payment", paymentRoutes);
app.use("/notifications", notificationRoutes);
app.use("/products", require("./routes/products"));
app.use("/users", require("./routes/users"));
app.use("/orders", require("./routes/orders"));

module.exports = { app };