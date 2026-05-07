const profileModel = require("../models/profileModel");

exports.getProfilePosts = (req, res, next) => {
  let idUsuario = req.query.dados;
  profileModel
    .getProfilePosts(idUsuario)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    });
};

exports.getProfileDash = (req, res, next) => {
  let idUsuario = req.query.dados;
  profileModel
    .getProfileDash(idUsuario)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    });
};
