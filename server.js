/** @format */

const express = require("express");
const mongoose = require("mongoose");
const Shorturl = require("./models/shorturl");
const app = express();
mongoose.connect("mongodb://127.0.0.1:2017/URLSHORTNER", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4
})
.then(() => console.log("Connected to MongoDB successfully!"))
.catch(err => console.error("Error connecting to MongoDB:", err));



app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const shorturls = await Shorturl.find();
  res.render("index", { shorturls: shorturls });
});
app.post("/shorturls", async (req, res) => {
  await Shorturl.create({ Entire: req.body.EntireURL });

  res.redirect("/");
});
app.listen(process.env.PORT || 3000);
