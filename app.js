/* global require process */
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
express.static.mime.types["js"] = "application/javascript";
app.use(express.static("public"));
app.use("/", express.static("dist"));
app.listen(port, () => console.log(`Vue Hangman app listening on port ${port}!`));