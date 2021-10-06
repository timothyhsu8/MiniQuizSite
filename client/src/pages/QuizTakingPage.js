import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Box, Center, Text, Grid, VStack, Button, Image } from "@chakra-ui/react"
import { useLocation, Link } from 'react-router-dom'

export default function QuizTakingPage( {} ) {
    
    const location = useLocation()  // This passes state from a <Link>
    const [currentUser, setCurrentUser] = useState(location.state?.username);
    const questions = location.state?.questions
    const answers = location.state?.answers
    const numQuestions = location.state?.numQuestions
    const correctAnswers = location.state?.correctAnswers

    const [questionNum, setQuestionNum] = useState(1)
    const [selectedAnswer, setSelectedAnswer] = useState(-1)
    const [numCorrect, setNumCorrect] = useState(0)

    const answerColor = "purple.900"
    const hoverColor = "blue.700"
    const selectedColor = "yellow.500"
    const [databaseUsers, setDatabaseUsers] = useState([])
    const url = 'http://localhost:5000/users/create';

    useEffect(() => {
        const response = getUsers()
        response.then(res =>
          setDatabaseUsers(res)
           )
      }, []);
    
      async function getUsers() {
        try {
          const {data:response} = await axios.get(url) 
          return response
        }
    
        catch (error) {
          console.log(error);
        }
      }

    function updateUser(){
        let user = databaseUsers.find(element => element.name === currentUser)
        let user_id = user._id
        axios.patch(url + "/" + user_id, {name: user.name, score: user.score+numCorrect})
    }

    const nextQuestion = () => {
        if(questionNum !== numQuestions){
            if(correctAnswers[questionNum-1] === answers[questionNum-1][selectedAnswer])
                setNumCorrect(numCorrect+1)

            setQuestionNum(questionNum+1)
            setSelectedAnswer(-1)
        }
    }

    const renderNextQuestionButton = () => {
        if(selectedAnswer === -1)
            return <Button fontSize="24" w="450px" h="70px" bgColor="gray.300" _hover={{bgColor:"gray.300"}}>Next Question</Button>
        
        else if(questionNum === numQuestions)
            return <Link w="50%" to={{pathname: "/homepage", state:{ username:location.state?.username } }}> <Button onClick={() => updateUser()} fontSize="24" w="450px" h="70px" bgColor="blue.300" _hover={{bgColor:"green.200"}}>Finish Quiz</Button> </Link>

        else 
            return <Button fontSize="24" w="450px" h="70px" bgColor="green.300" onClick={() => nextQuestion()} _hover={{bgColor:"green.200"}}>Next Question</Button>
    }
   
    return (
        <Box height="100vh">
            <Text ml="3" fontSize="20" color="gray.700">Correct Answers: {numCorrect}/{numQuestions}</Text>
            <Center>
                <VStack w="50%">
                    <Box>
                        <Text fontSize="40" fontWeight="medium" color="gray.700">
                            {questionNum}. {questions[questionNum-1]}
                        </Text>
                    </Box>
                    <Grid w="100%" templateRows ="1fr 1fr 1fr 1fr 1fr" h="600px">
                        <Button color="white" fontSize="30" bgColor={selectedAnswer === 0 ? selectedColor : answerColor} onClick={() => setSelectedAnswer(0)} _hover={{bgColor: selectedAnswer === 0 ? selectedColor : hoverColor }} h="100">{answers[questionNum-1][0]}</Button>
                        <Button color="white" fontSize="30" bgColor={selectedAnswer === 1 ? selectedColor : answerColor} onClick={() => setSelectedAnswer(1)} _hover={{bgColor: selectedAnswer === 1 ? selectedColor : hoverColor}} h="100">{answers[questionNum-1][1]}</Button>
                        <Button color="white" fontSize="30" bgColor={selectedAnswer === 2 ? selectedColor : answerColor} onClick={() => setSelectedAnswer(2)} _hover={{bgColor: selectedAnswer === 2 ? selectedColor : hoverColor}} h="100">{answers[questionNum-1][2]}</Button>
                        <Button color="white" fontSize="30" bgColor={selectedAnswer === 3 ? selectedColor : answerColor} onClick={() => setSelectedAnswer(3)} _hover={{bgColor: selectedAnswer === 3 ? selectedColor : hoverColor}} h="100">{answers[questionNum-1][3]}</Button>
                        <Center>{renderNextQuestionButton()}</Center>
                    </Grid>
                </VStack>
            </Center>
        </Box>
    )
}