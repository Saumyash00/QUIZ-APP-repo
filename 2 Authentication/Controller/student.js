const model = require("../models/student");
const{setUser} = require("../Services/service");

async function studentRegister(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.json("All fields are mandatory");
  await model.create({ name, email, password });
  // return res.json("Employee registered successfully");
  return res.redirect("/login");
}

async function studentLogin(req, res) {
  const { email, password } = req.body;
  if (!email || !password) return res.json("All fields are manadotry");
  const user = await model.findOne({ email });
  if (!user) return res.json("User not found");
  if (user.password !== password) return res.json("password is incorrect");
  const token = setUser(user);
  res.cookie("session_id",token);
  let url = `/home/${user._id}`;
  return res.redirect(url);
}

module.exports = { studentRegister, studentLogin };
