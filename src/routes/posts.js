var express = require("express");
var router = express.Router();
var path = require("path");
var postsController = require("../controllers/post");
const curtidaModel = require("../models/curtidaModel");

router.get("/recentes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/view/posts/recentes.html"))
})

router.get("/curtidos", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/view/posts/maisCurtidos.html"))
})

router.get("/orderByTime", postsController.orderByTime);

router.get("/orderByLikes", postsController.orderByLikes);

router.post("/curtir", postsController.curtir)

router.post("/descurtir", postsController.descurtir)

module.exports = router;
