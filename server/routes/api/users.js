const express = require('express');
const router = express.Router();

// Quiz Model
const User = require('../../models/User');

// @route GET api/quizs
// @desc Get all quizzes
router.get('/:name', (req, res) => {
  User.find({ name: req.params.name }).then((user) => {
    if (user.length == 0) {
      User.insertMany({
        name: req.params.name,
        score: 0,
      }).then((user) => res.json(user));
    } else {
      res.json(user);
    }
  });
});

// // @route GET api/quiz
// // @desc Get specific quiz
// router.get('/', (req, res) => {
//   Quiz.findOne({ name: req.body.name }).then((quiz) => res.json(quiz));
// });

// @route POST api/quizs
// @desc Create a quiz
router.post('/', (req, res) => {
  User.findOneAndUpdate(
    { name: req.body.name },
    {
      $set: { score: req.body.score },
    }
  ).then((user) => res.json(user));
});

module.exports = router;
