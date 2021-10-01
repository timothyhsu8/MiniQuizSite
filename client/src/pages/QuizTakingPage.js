import React, { useState } from 'react'
import { Box, Center, Text, Grid, VStack, Button, Image } from "@chakra-ui/react"
import { useLocation } from 'react-router-dom'

export default function QuizTakingPage( {} ) {
    
    const location = useLocation()  // This passes state from a <Link>
    const questions = location.state?.questions
    const answers = location.state?.answers
    const numQuestions = location.state?.numQuestions
    const correctAnswers = location.state?.correctAnswers

    const [questionNum, setQuestionNum] = useState(1)
    const [selectedAnswer, setSelectedAnswer] = useState(-1)
    const [numCorrect, setNumCorrect] = useState(0)

    const answerColor = "blue.300"
    const hoverColor = "blue.200"
    const selectedColor = "orange.200"

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
            return <Button w="50%" bgColor="gray.300" _hover={{bgColor:"gray.300"}}>Next Question</Button>

        else 
            return <Button w="50%" bgColor="green.300" onClick={() => nextQuestion()} _hover={{bgColor:"green.200"}}>Next Question</Button>
    }
   
    return (
        <Box bgColor="gray.800" height="100vh">
            <Text ml="3" fontSize="20" color="gray.100">Correct Answers: {numCorrect}/{numQuestions}</Text>
            <Center>
                <VStack w="50%">
                    <Box>
                        <Text fontSize="40" fontWeight="bold" color="gray.100">
                            {questionNum}. {questions[questionNum-1]}
                        </Text>
                    </Box>
                    <Grid w="100%" templateRows ="1fr 1fr 1fr 1fr 1fr" h="350px">
                        <Button bgColor={selectedAnswer === 0 ? selectedColor : answerColor} onClick={() => setSelectedAnswer(0)} _hover={{bgColor: selectedAnswer === 0 ? selectedColor : hoverColor }} h="50">{answers[questionNum-1][0]}</Button>
                        <Button bgColor={selectedAnswer === 1 ? selectedColor : answerColor} onClick={() => setSelectedAnswer(1)} _hover={{bgColor: selectedAnswer === 1 ? selectedColor : hoverColor}} h="50">{answers[questionNum-1][1]}</Button>
                        <Button bgColor={selectedAnswer === 2 ? selectedColor : answerColor} onClick={() => setSelectedAnswer(2)} _hover={{bgColor: selectedAnswer === 2 ? selectedColor : hoverColor}} h="50">{answers[questionNum-1][2]}</Button>
                        <Button bgColor={selectedAnswer === 3 ? selectedColor : answerColor} onClick={() => setSelectedAnswer(3)} _hover={{bgColor: selectedAnswer === 3 ? selectedColor : hoverColor}} h="50">{answers[questionNum-1][3]}</Button>
                        <Center>{renderNextQuestionButton()}</Center>
                    </Grid>
                </VStack>
            </Center>
        </Box>
    )
}