const mongoose = require("mongoose");
const Quest = require("./models/Quest");

mongoose.connect("mongodb://db:27017/careerquest");

async function run() {
  await Quest.deleteMany();
  await Quest.insertMany([
    { title: "Créer un repo GitHub", xp: 20 },
    { title: "Apprendre Docker", xp: 30 },
    { title: "Déployer une app", xp: 50 }
  ]);
  console.log("Seed OK");
  process.exit();
}

run();
