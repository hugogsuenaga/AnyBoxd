const cadastrarModel = require("../models/cadastrarModel");

function verNome(nome) {
  if (!nome) return false;
  let nomeCompleto = nome.split(" ")[1] != "";
  let regra = /^[a-zA-ZÀ-ÿ\s]+$/;
  if (regra.test(nome) && nomeCompleto) {
    return true;
  } else {
    console.log(1);
    return false;
  }
}

function verUsername(username) {
  if (!username) return false;
  let tamanhoMinimo = username.length > 5;
  let palavraUnica = !username.includes(" ");

  if (tamanhoMinimo && palavraUnica) {
    return true;
  } else {
    console.log(2);
    return false;
  }
}

function verEmail(email) {
  if (!email) return false;
  let temArroba = email.includes("@");
  let temSoUmArroba = email.indexOf("@") == email.lastIndexOf("@");
  let temPontoDpsDoArroba = email.lastIndexOf(".") > email.indexOf("@") + 1;
  let temLocalPart = email.split("@")[0].length > 0;
  let temDominio = email.split("@")[1].length > 0;
  let temTLD = email.split(".")[1].length > 0;
  let naoTemEspaco = !email.includes(" ");
  let tamanhoMinimo = email.length > 5;

  if (
    temArroba &&
    temSoUmArroba &&
    temPontoDpsDoArroba &&
    naoTemEspaco &&
    tamanhoMinimo &&
    temLocalPart &&
    temDominio
  ) {
    return true;
  } else {
    console.log(3);
    return false;
  }
}

function verSenha(senha) {
  if (!senha) return false;
  let maiusculasEMinusculas = senha.toUpperCase() != senha;
  let tamanhoMinimo = senha.length >= 8;
  let regra = /[^a-zA-ZÀ-ÿ\s]+$/;
  let temCaracteresEspeciais = regra.test(senha);

  if (temCaracteresEspeciais && tamanhoMinimo && maiusculasEMinusculas) {
    return true;
  } else {
    console.log(4);
    return false;
  }
}

exports.postSingup = async (req, res) => {
  const { nome, username, email, senha } = req.body;
  console.log(req.body);
  if (
    verNome(nome) &&
    verUsername(username) &&
    verEmail(email) &&
    verSenha(senha)
  ) {
    cadastrarModel
      .cadastrar(nome, username, email, senha)
      .then(function (resultado) {
res.status(201).json({ mensagem: "Cadastro realizado com sucesso!" });
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage,
        );
        res.status(500).json(erro.sqlMessage);
      });
  } else {
    let msg = "";
    if (!verNome(nome))
      msg += `O nome deve conter sobrenome e apenas letras.<br>`;
    if (!verUsername(username))
      msg += `Username deve ter mais de 5 caracteres e sem espaços.<br>`;
    if (!verEmail(email)) msg += `E-mail inválido.<br>`;
    if (!verSenha(senha))
      msg += `A senha deve ter 8+ caracteres, maiúsculas, minúsculas e símbolos.<br>`;
    return res.status(400).json({ mensagem: msg });
    console.log("deu algum problema");
  }
};


