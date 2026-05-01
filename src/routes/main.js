var express = require("express");
var router = express.Router();
var path = require("path");
const { postSingup } = require("../controllers/singup");
const { postLogin } = require("../controllers/login");

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/view/main.html"));
});

router.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/view/login.html"));
});
router.post("/login", postLogin);

router.get("/singup", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/view/singup.html"));
});
router.post("/singup", postSingup)

module.exports = router;