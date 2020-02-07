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
        resources: [
          {
            isCompleted: {
              type: Boolean,
              default: false
            },
            name: {
              type: String,
              required: true
            },
            url: {
              type: String
            }
          }
        ],
        projects: [
          {
            isCompleted: {
              type: Boolean,
              default: false
            },
            name: {
              type: String,
              required: true
            },
            url: {
              type: String
            }
          }
        ]
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Curriculum", CurriculumSchema);

// resources: [(isCompleted: false), (name: ""), (url: "")];
