const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name of workout must be entered",
  },
  type: {
    type: String,
    trim: true,
    required: "Name the type of exercise type",
  },
  weight: {
    type: Number
    
  },
  sets: {
    type: Number
    
  },
  reps: {
    type: Number
    
  },
  distance: {
    type: Number
    
  },
  duration: {
    type: Number,
    required: "Enter the duration of the exercise"
  },
  
  

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;