const express = require("express");
const AuthController = require("../controllers/AuthController");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from AuthRoutes");
});
router.post("/login", AuthController.login);
router.post("/signup", AuthController.signup);

module.exports = router;
