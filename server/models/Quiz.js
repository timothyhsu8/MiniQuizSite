const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const QuizSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: 'SpaceQuiz',
  },
});

module.exports = Quiz = mongoose.model('quiz', QuizSchema);
