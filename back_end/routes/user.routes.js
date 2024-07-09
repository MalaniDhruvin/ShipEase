const express = require("express");
const { userLogin } = require("../controllers/user.controller.js");
const { registerUser } = require("../controllers/registerUser.controller.js");
const { verifyUser } = require("../middlewares/auth.middleware.js");
const { bookShipment } = require("../controllers/bookShipment.controller.js");
const router = express.Router();

// const {verifyUser} = require("../middlewares/auth.middleware.js");
// const { credentials } = require("../controllers/usercredentials.controller.js");
router.post("/login", userLogin);
router.post("/register", registerUser);
router.post("/bookshipment", verifyUser, bookShipment);
// router.post("/adduser", addUser); 
// router.post("/logout", userLogout);
// router.post("/credentials", credentials);

module.exports = router;