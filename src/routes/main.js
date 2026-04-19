var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/view/main.html"));
});

router.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/view/login.html"));
});

router.get("/singup", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/view/singup.html"));
});
module.exports = router;