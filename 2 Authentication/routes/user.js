const express = require("express");
const router = express.Router();
const { studentRegister, studentLogin } = require("../Controller/student");

router.post("/signup", studentRegister);
router.post("/login", studentLogin);
module.exports = router;
