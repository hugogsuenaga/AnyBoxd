const loginModel = require("../models/loginModel");

exports.postLogin = (req, res) => {
  const { email, senha } = req.body;

  if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    loginModel.login(email, senha)
    .then(function (resultadoAutenticar) {
      console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
      console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); 

      if (resultadoAutenticar.length == 1) {
        console.log(resultadoAutenticar);
        res.json({
          id: resultadoAutenticar[0].idUsuario,
          nome: resultadoAutenticar[0].nome,
          email: resultadoAutenticar[0].email,
          senha: resultadoAutenticar[0].senha,
        });
      } else if (resultadoAutenticar.length == 0) {
        res.status(403).send("Email e/ou senha inválido(s)");
      } else {
        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar o login! Erro: ",
        erro.sqlMessage,
      );
      res.status(500).json(erro.sqlMessage);
    });
  }
};
