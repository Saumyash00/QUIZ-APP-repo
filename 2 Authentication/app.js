const express = require("express");
const app = express();
const router = express.Router();
const useRoute = require("./routes/user.js");
const uiRoute = require("./routes/ui.js");
const path = require("path");
const { connectDB } = require("./connectionDB.js");

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//Public
app.use(express.static(path.join(__dirname, "public")));

//Connection creation
connectDB("mongodb://127.0.0.1:27017/studentsDB").then(() => {
  console.log("db connected");
});

//Router and URL Via middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use("/", uiRoute);
app.use("/user", useRoute);

const Port = 5000;
app.listen(Port, () => {
  console.log(`Server run at: http://localhost:${Port}`);
});
