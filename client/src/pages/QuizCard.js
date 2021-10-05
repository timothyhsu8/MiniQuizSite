import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Center, Text, Grid, VStack, Button, Image, Badge, propNames} from "@chakra-ui/react"
import '../styles/homepage.css';

function QuizCard(props) {
    return (
        <VStack spacing="0">
            <Box w='300px' h='180px' borderRadius="15" _hover={{opacity:"80%"}}>
                <Image borderRadius="10" src={props.image} h='160px' w='300px'></Image>
            </Box>
            <Text fontSize="22">{props.title}</Text>
        </VStack>
    )
}

export default QuizCard;