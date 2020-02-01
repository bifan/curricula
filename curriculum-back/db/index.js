const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/curriculumapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
const Curriculum = require("./Curriculum");

// const curriculum = new Curriculum({ name: "JavaScript1" });
// curriculum.save().then(() => console.log("curriculum saved"));

module.exports = {
  Curriculum
};
