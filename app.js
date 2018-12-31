const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

const app = express();

// Connect to DB
const db = require("./config/keys").MongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => "MongoDB connected")
  .catch(() => console.log(err));

// Body Parser
app.use(express.urlencoded({ extended: true }));

// Ejs
app.use(ejsLayouts);
app.set("view engine", "ejs");

// Routes
const index = require("./routes/index");
const users = require("./routes/users");

app.use("/", index);
app.use("/users", users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server started at port ${5000}`);
