const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const ProfileContrller = require("./Controller/ProfileController");

const app = express();
app.use(cors());

const url = process.env.DB_URL;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("lets build an api");
});
app.use(express.json());
app.use("/ProfileContrller", ProfileContrller);
app.listen(process.env.PORT || 9000);
