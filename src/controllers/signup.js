const cadastrarModel = require("../models/cadastrarModel");

let charEsp = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
  "|",
  "`",
  "~",
  '"',
  "'",
];
let charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function verificarNome(nome) {
  if (!nome) return false;
  let partes = nome.trim().split(" ");
  let nomeCompleto = partes.length > 1 && partes[1].length > 0;
  let temCaracteresEspeciais = false;

  for (let i = 0; i < nome.length; i++) {
    if (charEsp.includes(nome[i]) || charNum.includes(nome[i])) {
      temCaracteresEspeciais = true;
    }
  }
  if (!temCaracteresEspeciais && nomeCompleto) {
    return true;
  } else {
    return false;
  }
}

function verificarUsername(username) {
  if (!username) return false;
  let tamanhoMinimo = username.length > 5;
  let palavraUnica = !username.includes(" ");

  if (tamanhoMinimo && palavraUnica) {
    return true;
  } else {
    return false;
  }
}

function verificarEmail(email) {
  if (!email) return false;

  let naoTemEspaco = !email.includes(" ");
  let tamanhoMinimo = email.length > 5;
  let temArroba = email.includes("@");

  let partesArroba = email.split("@");
  let temSoUmArroba = partesArroba.length === 2;

  let localPart = partesArroba[0] || "";
  let dominioPart = partesArroba[1] || "";
  let temLocalPart = localPart.length > 0;
  let temDominio = dominioPart.length > 0;

  let ultimaPosicaoPonto = email.lastIndexOf(".");
  let posicaoArroba = email.indexOf("@");

  let temPontoDpsDoArroba = ultimaPosicaoPonto > posicaoArroba + 1;

  let partesPonto = email.split(".");
  let temTLD =
    partesPonto.length > 1 && partesPonto[partesPonto.length - 1].length > 0;

  if (
    temArroba &&
    temSoUmArroba &&
    temPontoDpsDoArroba &&
    naoTemEspaco &&
    tamanhoMinimo &&
    temLocalPart &&
    temDominio &&
    temTLD
  ) {
    return true;
  } else {
    return false;
  }
}

function verificarSenha(senha) {
  if (!senha) return false;
  let maiusculasEMinusculas =
    senha.toUpperCase() != senha && senha.toLowerCase() != senha;
  let tamanhoMinimo = senha.length >= 8;
  let temCaracteresEspeciais = false;
  let temNumeros = false;

  for (let i = 0; i < senha.length; i++) {
    if (charEsp.includes(senha[i])) {
      temCaracteresEspeciais = true;
    }
    if (charNum.includes(senha[i])) {
      temNumeros = true;
    }
  }
  if (
    temCaracteresEspeciais &&
    tamanhoMinimo &&
    maiusculasEMinusculas &&
    temNumeros
  ) {
    return true;
  } else {
    return false;
  }
}

exports.postSignup = async (req, res) => {
  const { nome, username, email, senha } = req.body;
  console.log(req.body);
  let verNome = verificarNome(nome);
  let verEmail = verificarEmail(email);
  let verUsername = verificarUsername(username);
  let verSenha = verificarSenha(senha);
  if (verNome && verUsername && verEmail && verSenha) {
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
    if (!verNome) {
      msg += `O nome deve conter sobrenome e apenas letras.<br>`;
    } else if (!verUsername) {
      msg += `Username deve ter mais de 5 caracteres e sem espaços.<br>`;
    } else if (!verEmail) {
      msg += `E-mail inválido.<br>`;
    } else if (!verSenha) {
      msg += `A senha deve ter 8+ caracteres, maiúsculas, minúsculas e símbolos.<br>`;
    }
    return res.status(400).json({ mensagem: msg });
    console.log("deu algum problema");
  }
};
