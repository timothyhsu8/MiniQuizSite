const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const quizs = require('./routes/api/quizs');
const users = require('./routes/api/users');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = require('./keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

// Use Routes
app.use('/api/quizs', quizs);
app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
