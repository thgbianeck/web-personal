const bcrypt = require("bcrypt-nodejs");
const jwt = require("../services/jwt");

const User = require("../models/user");

function signUp(req, res) {
  const user = new User();

  const { name, lastName, email, password, repeatPassword } = req.body;
  user.name = name;
  user.lastName = lastName;
  user.email = email;
  user.role = "admin";
  user.active = false;

  if (!password || !repeatPassword) {
    res.status(404).send({ message: "As senha são obrigatórias" });
  } else {
    if (password !== repeatPassword) {
      res.status(404).send({ message: "As senhas não são iguais" });
    } else {
      bcrypt.hash(password, null, null, function (err, hash) {
        if (err) {
          res.status(500).send({ message: "Erro ao encriptar a senha" });
        } else {
          user.password = hash;

          user.save((err, userStored) => {
            if (err) {
              res.status(500).send({ message: "O Usuário já existe" });
            } else {
              if (!userStored) {
                res.status(404).send({ message: "Erro ao criar o usuário" });
              } else {
                res.status(200).send({ user: userStored });
              }
            }
          });
        }
      });
    }
  }
}

function signIn(req, res) {
  const params = req.body;
  const email = params.email.toLowerCase();
  const password = params.password;

  User.findOne({ email }, (err, userStored) => {
    if (err) {
      res.status(500).send({ message: "Erro do servidor." });
    } else {
      if (!userStored) {
        res.status(404).send({ message: "Usuario não encontrado." });
      } else {
        bcrypt.compare(password, userStored.password, (err, check) => {
          if (err) {
            res.status(500).send({ message: "Erro do servidor." });
          } else if (!check) {
            res.status(404).send({ message: "A Senha está incorreta." });
          } else {
            if (!userStored.active) {
              res
                .status(200)
                .send({ code: 200, message: "O Usuário não está ativado." });
            } else {
              res.status(200).send({
                accessToken: jwt.createAccessToken(userStored),
                refreshToken: jwt.createRefreshToken(userStored),
              });
            }
          }
        });
      }
    }
  });
}

module.exports = {
  signUp,
  signIn,
};
