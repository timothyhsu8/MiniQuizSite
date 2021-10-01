import React from 'react';
import { Link } from 'react-router-dom'
import { Box, Grid, GridItem, Center } from '@chakra-ui/react';
import QuizCard from "../pages/QuizCard"
import { quizData } from '../quizData'

import '../styles/homepage.css';

import bg from '../images/homebg.png';
import quiz1image from '../images/planets.jpeg'
import quiz2image from '../images/spacejam.png'
import quiz3image from '../images/spacetravel.jpeg'
import quiz4image from '../images/spacetrivia.jpeg'
import finalquizimage from '../images/lock.png'

var pulledData = false;

var quiz1title = "Name that Planet";
var quiz2title = "Space in Pop Culture";
var quiz3title = "History of Space Travel";
var quiz4title = "Space Trivia";

var finalquiztitle = "Unlock Final Challenge";

export default function Homepage() {

  if (!pulledData) {
    fetch('/api/quizs')
      .then((res) => res.json())
      .then((data) => console.log(data));
    pulledData = true;
  }

  return (
    <Box className='container' h="100vh" backgroundImage={bg}>
      <Box className='navbar' w='100%' h='25px'>
        <p> username </p>
        <p> 0 </p>
      </Box>

      <div className='title' w='300px' h='400px'>
        <Center mt="35">Space Quizzer</Center>
      </div>

      <div className='subtitle1' w='300px' h='400px'>
        <Center>Test your knowledge of space with these quizzes...</Center>
      </div>

      <Center mt="5">
        <div className='quizcards' w='100%' h='250px'>
          <Link to={{pathname: "/quiztaking", state: { 
                  numQuestions: quizData.quiz1.numQuestions,
                  questions: quizData.quiz1.questions,
                  answers: quizData.quiz1.answers, 
                  correctAnswers: quizData.quiz1.correctAnswers
                  }}}> 
            <QuizCard title={quiz1title} image={quiz1image} /> 
          </Link>
                  
          <Link to={{pathname: "/quiztaking", state: { 
                  numQuestions: quizData.quiz2.numQuestions,
                  questions: quizData.quiz2.questions,
                  answers: quizData.quiz2.answers, 
                  correctAnswers: quizData.quiz2.correctAnswers
              }}}> 
            <QuizCard title={quiz2title} image={quiz2image} />   
          </Link>

          <Link to={{pathname: "/quiztaking", state: { 
                  numQuestions: quizData.quiz3.numQuestions,
                  questions: quizData.quiz3.questions,
                  answers: quizData.quiz3.answers, 
                  correctAnswers: quizData.quiz3.correctAnswers
              }}}> 
            <QuizCard title={quiz3title} image={quiz3image} />   
          </Link>

          <Link to={{pathname: "/quiztaking", state: { 
                  numQuestions: quizData.quiz4.numQuestions,
                  questions: quizData.quiz4.questions,
                  answers: quizData.quiz4.answers, 
                  correctAnswers: quizData.quiz4.correctAnswers
              }}}> 
            <QuizCard title={quiz4title} image={quiz4image} />   
          </Link>
        </div>
      </Center>

      <div className='subtitle2' w='300px' h='400px'>
        <Center mt="100"> score a total of 1000 to unlock the challenge below! </Center>
      </div>

      <Center> <QuizCard title={finalquiztitle} image={finalquizimage} /></Center>
    </Box>
  );
}