var express = require("express");
var router = express.Router();
var path = require("path");
var profileController = require("../controllers/profile");

router.get("/", function (req, res) {
res.sendFile(path.join(__dirname, "../../public/view/profile.html"));
});

router.get("/posts", profileController.getProfilePosts)

router.get('/dash', profileController.getProfileDash)

module.exports = router;

