const { getUser } = require("../Services/service");

async function restrictToLoggingUserOnly(req, res, next) {
  console.log(req.cookies);
  const userUid = req.cookies?.session_id;
  console.log(userUid);

  if (!userUid) return res.redirect("/login");

  req.user = user;
  next();
}

async function checkAuth(req, res, next) {
  const userUid = req.cookies?.session_id;

  const user = getUser(userUid);

  req.user = user;
  next();
}

module.exports = { checkAuth, restrictToLogginUserOnly };
