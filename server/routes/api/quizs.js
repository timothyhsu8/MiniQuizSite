const express = require('express');
const router = express.Router();

// Quiz Model
const Quiz = require('../../models/Quiz');

// @route GET api/quizs
// @desc Get all quizzes
router.get('/', (req, res) => {
  Quiz.find().then((quizs) => res.json(quizs));
});

// // @route GET api/quiz
// // @desc Get specific quiz
// router.get('/', (req, res) => {
//   Quiz.findOne({ name: req.body.name }).then((quiz) => res.json(quiz));
// });

// @route POST api/quizs
// @desc Create a quiz
// router.post('/', (req, res) => {
//   const newQuiz = new Quiz({
//     name: req.body.name,
//   });

//   newQuiz.save().then((quiz) => res.json(quiz));
// });

module.exports = router;
