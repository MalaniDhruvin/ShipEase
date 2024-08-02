const express = require("express");
const { userLogin, userLogout, accessRefreshToken } = require("../controllers/user.controller.js");
const { registerUser } = require("../controllers/registerUser.controller.js");
const { verifyUser } = require("../middlewares/auth.middleware.js");
const { bookShipment } = require("../controllers/bookShipment.controller.js");
const { getAddress } = require("../controllers/getAddress.controller.js");
const { getShipments } = require("../controllers/getShipments.controller.js");
const { userProfile } = require("../controllers/userProfile.controller.js");
const router = express.Router();

router.post("/login", userLogin);
router.post("/register", registerUser);
router.post("/bookshipment", verifyUser, bookShipment);
router.get("/getaddress", verifyUser, getAddress);
router.get("/getshipments", verifyUser, getShipments);
router.get("/userprofile", verifyUser, userProfile);
router.get("/logout", verifyUser, userLogout);
router.post("/refreshtoken", accessRefreshToken);

module.exports = router;