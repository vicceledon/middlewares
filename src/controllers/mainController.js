const path = require("path");

const mainController = {
  index: (req, res) => {
    res.render("index");
  },
  admin: (req, res) => {
    res.send(`<h1> El usuario ${req.admins} es administrador </h1>`);
  },
};

module.exports = mainController;
