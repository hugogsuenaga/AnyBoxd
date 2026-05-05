var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/profile", function (req, res) {
res.sendFile(path.join(__dirname, "../../public/view/profile.html"));
});

module.exports = router;

