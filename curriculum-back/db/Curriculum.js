const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

const CurriculumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  goal: {
    type: String
  },
  description: {
    type: String
  }
  ,
  sections: [{
    name: {
      type: String,
      required: true
    },
    resources: [String],
    projects: [String]
  }]
});

CurriculumSchema.plugin(timestamps);

module.exports = mongoose.model("Curriculum", CurriculumSchema);
