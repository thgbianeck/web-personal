const bcrypt = require("bcrypt-nodejs");
// const jwt = require("jwt-simple")

const User = require("../models/user");

function signUp(req, res) {
  console.log("EndPoint de signUp executado");
}

module.exports = {
  signUp,
};
