var express = require("express");
var router = express.Router();
var path = require("path");
const { postSignup } = require("../controllers/signup");
const { postLogin } = require("../controllers/login");

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/view/main.html"));
});

router.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/view/login.html"));
});
router.post("/login", postLogin);

router.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/view/signup.html"));
});
router.post("/signup", postSignup)

module.exports = router;