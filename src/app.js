require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const router = require("./routes/gameRouter");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/", router);

app.listen(process.env.PORT || 3000, () => {
  console.log(`server horsin around on http://localhost:${process.env.PORT}`);
});
