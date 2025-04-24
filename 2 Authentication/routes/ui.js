const express = require("express");
const router = express.Router();
const model = require("../models/student");

router.get("/home/:id", async (req, res) => {
  const { id } = req.params;
  const data = await model.findById(id);
  const user = {
    name: data.name,
    email: data.email,
  };
  console.log(user);
  res.render("layout", { user });
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
