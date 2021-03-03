const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
require("dotenv").config();

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(`mongodb+srv://${process.env.MONGO_NAME}:${process.env.PASSWORD}@cluster0.r9b4e.mongodb.net/Budgets?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});