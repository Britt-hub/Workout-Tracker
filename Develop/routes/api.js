var router = require("express").Router();
var Workout = require("../../models/workout")

router.put("/api/workouts/:id", ({ body, params }, res) => {

    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        // "runValidators" will ensure required 
        { new: true, runValidators: true }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });

})
router.post("/api/workouts", (req, res) => {

})
router.get("/api/workouts", (req, res) => {

})

router.get("/api/workouts/range", (req, res) => {
 Workout.findById
})

router.delete("/api/workouts", ({ body }, res) => {

})

module.exports = router


