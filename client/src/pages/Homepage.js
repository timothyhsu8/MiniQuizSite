import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Box, Center, Text, VStack, Grid, Divider, Button } from '@chakra-ui/react';
import QuizCard from "../pages/QuizCard"
import { quizData } from '../quizData'
import axios from 'axios'
import '../styles/homepage.css';

import quiz1image from '../images/planets.jpeg'
import quiz2image from '../images/spacejam.png'

export default function Homepage() {

  const [allUsers, setAllUsers] = useState();

  var pulledData = false;
  var quiz1title = "Entertainment";
  var quiz2title = "Animals";

  const url = 'http://localhost:5000/users/create';

  const renderLeaderboard = () => {
    let leaderboard = [
      <Box w="500px">
          <Grid templateColumns="1fr 1fr">
            <Text textAlign="center" fontWeight="bold">User</Text>
            <Text textAlign="center" fontWeight="bold">Score</Text>
          </Grid>
            <Box w="90" h="0.2" bgColor="gray.500" />
        </Box>
    ]
    let allUsers = ["MarioGamer200", "Tree", "Loller", "Aem", "Artoks"]
    let allScores = [100, 200, 300, 400, 1, 200, 300]
    
    for(let i = 0 ; i < allUsers.length ; i++)
      leaderboard.push(
        <Box w="500px">
          <Grid templateColumns="1fr 1fr">
            <Text textAlign="center">{allUsers[i]}</Text>
            <Text textAlign="center">{allScores[i]}</Text> 
          </Grid>
        </Box>)

    return <VStack>
      {leaderboard}
    </VStack>
  }

  async function axiosTest() {
    try {
      const {data:response} = await axios.get(url) //use data destructuring to get data from the promise object
      return response
    }

    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const response = axiosTest()
    // response.then(res => console.log(res.json()))
  });

  return (
    <Box>
      <Box className='navbar' w='100%' h='25px'>
        <p> username </p>
        <p> 0 </p>
      </Box>

      <Center mt="35">
        <VStack>
          <Text color="gray.700" fontSize="45">Trivia Quizzer</Text>
          <Text color="gray.700" fontSize="20">The world's most respected quiz website</Text> 
        </VStack> 
      </Center>

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
            <QuizCard title={quiz2title} image={quiz2image}  />   
          </Link>
        </div>
      </Center>

      <Center mt="30">
        <Box>
          <VStack spacing="0">
            <Text fontWeight="bold" fontSize="20">
              Leaderboards
            </Text>
            
            <Button onClick={() => console.log(allUsers)}>Show users</Button>
            {renderLeaderboard()}
          </VStack>
          </Box>
      </Center>
    </Box>
  );
}