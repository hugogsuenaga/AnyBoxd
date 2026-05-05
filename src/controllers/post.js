const postModel = require("../models/postModel");
const curtidaModel = require("../models/curtidaModel");

exports.orderByTime = (req, res, next) => {
  let idUsuario = req.query.idUsuario;
  postModel
    .time(idUsuario)
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

exports.orderByLikes = (req, res, next) => {
  let idUsuario = req.query.idUsuario;
  postModel
    .likes(idUsuario)
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

exports.curtir = (req, res) => {
  let dados = req.query.dados;
  let idPost = dados.split("")[0];
  let idUsuarioLogado = dados.split("")[1];

  curtidaModel
    .inserirCurtida(idPost, idUsuarioLogado)
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

exports.descurtir = (req, res) => {
  let dados = req.query.dados;
  let idPost = dados.split("")[0];
  let idUsuarioLogado = dados.split("")[1];

  curtidaModel
    .removerCurtida(idPost, idUsuarioLogado)
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
