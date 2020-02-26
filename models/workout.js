const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        
    
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
    }],
},

    {
        toJSON: {
            // include any virtual properties when data is requested
            virtuals: true
        }
    }
);
// adds a dynamically-created property to schema

WorkoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercises) => {
        return total + exercises.duration;
    }, 0);

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;