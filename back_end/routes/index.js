const express = require("express");
const router = express.Router();

router.use("/users", require("./user.routes.js"));

module.exports = router;

