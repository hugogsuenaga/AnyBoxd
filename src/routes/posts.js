var express = require("express");
var router = express.Router();
var path = require("path");
var postsController = require("../controllers/post");

router.get("/orderByTime", postsController.orderByTime, function (req, res) {
res.sendFile(path.join(__dirname, "../../public/view/orderByTime.html"));
});

module.exports = router;
