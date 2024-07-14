const express = require("express");
const { userLogin } = require("../controllers/user.controller.js");
const { registerUser } = require("../controllers/registerUser.controller.js");
const { verifyUser } = require("../middlewares/auth.middleware.js");
const { bookShipment } = require("../controllers/bookShipment.controller.js");
const { getAddress } = require("../controllers/getAddress.controller.js");
const { getShipments } = require("../controllers/getShipments.controller.js");
const router = express.Router();

router.post("/login", userLogin);
router.post("/register", registerUser);
router.post("/bookshipment", verifyUser, bookShipment);
router.post("/getaddress", verifyUser, getAddress);
router.post("/getshipments", verifyUser, getShipments);
// router.post("/logout", userLogout);

module.exports = router;