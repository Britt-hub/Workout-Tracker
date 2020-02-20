const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name of workout must be entered"
  },
  
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;