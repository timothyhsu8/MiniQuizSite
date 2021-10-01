import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Center, Text, Grid, VStack, Button } from "@chakra-ui/react"
import { quizData } from '../quizData'

/* TEST PAGE: TO BE REMOVED LATER
        - Use this format to link quizzes on the homepage    
*/
export default function TestingPage( {} ) {
    return (
        <Box>
            <Link to={{pathname: "/quiztaking", state: { 
                numQuestions: quizData.quiz1.numQuestions,
                questions: quizData.quiz1.questions,
                answers: quizData.quiz1.answers, 
                correctAnswers: quizData.quiz1.correctAnswers
                 }}}> <Button bgColor="gray.300">Quiz 1</Button> </Link>


            <Link to={{pathname: "/quiztaking", state: { 
                numQuestions: quizData.quiz2.numQuestions,
                questions: quizData.quiz2.questions,
                answers: quizData.quiz2.answers, 
                correctAnswers: quizData.quiz2.correctAnswers
             }}}> <Button bgColor="gray.300">Quiz 2</Button> </Link>

            {/* <Button bgColor="gray.300">Quiz 3</Button>
            <Button bgColor="gray.300">Quiz 4</Button> */}
        </Box>
    )
}