const { redirect } = require("express/lib/response");

const admins = ["Ada", "Greta", "Vim", "Tim"];

const isAdmin = function (req, res, next) {
  const user = req.query.user;
  if (user && admins.includes(user)) {
    req.admins = user;
    next();
  } else {
    res.send("error");
  }
};
module.exports = isAdmin;
