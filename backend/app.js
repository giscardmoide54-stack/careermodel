const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://db:27017/careerquest");

app.use("/api/auth", require("./routes/auth"));
app.use("/api/quests", require("./routes/quests"));

app.listen(5000, () => console.log("Backend running on 5000"));
