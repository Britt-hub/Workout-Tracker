var router = require("express").Router();
var Workout = require("../../models/workout")
console.log("route");

router.put("/api/workouts/:id", ({ body, params }, res) => {
console.log(body)
console.log(params)

    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercise: body } },
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
    Workout.create({})

    .then(dbWorkout => {
        console.log(dbWorkout)
        res.json(dbWorkout);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    });

})
router.get("/api/workouts", (req, res) => {
    console.log("api");
    Workout.find({})

    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    }); 
})

router.get("/api/workouts/range", (req, res) => {

    Workout.find({}).limit(7)

    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    }); 


})

router.delete("/api/workouts", ({ body }, res) => {

    Workout.findByIdAndDelete(body.id)

    .then(()  => {
        res.json(true);
    })
    .catch(err => {
        res.json(err);
    }); 

})

module.exports = router


