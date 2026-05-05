var express = require("express");
var router = express.Router();
var path = require("path");
var postsController = require("../controllers/post");

router.get("/recentes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/view/posts/recentes.html"))
})


router.get("/curtidos", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/view/posts/maisCurtidos.html"))
})

router.get("/orderByTime", postsController.orderByTime);

router.get("/orderByLikes", postsController.orderByLikes);


module.exports = router;
