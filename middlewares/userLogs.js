const fs = require("fs");
const path = require("path");

const userLogs = function (req, res, next) {
  fs.appendFileSync(
    path.join(__dirname, "../logs/userLogs.txt"),
    "El usuario ingreso a la ruta: " + req.path + "\n"
  );
  next();
};
module.exports = userLogs;
