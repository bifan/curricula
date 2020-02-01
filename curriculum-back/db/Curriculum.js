const mongoose = require("mongoose");

const CurriculumSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    goal: {
      type: String
    },
    description: {
      type: String
    },
    sections: [
      {
        name: {
          type: String,
          required: true
        },
        resources: [String],
        projects: [String]
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Curriculum", CurriculumSchema);
