const postModel = require("../models/postModel");

exports.orderByTime = (req, res, next) => {
    postModel.time().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}