import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Center, Text, Grid, VStack, Button, Image, Badge, propNames} from "@chakra-ui/react"
import test from '../images/App.png';
import '../styles/homepage.css';

function QuizCard(props) {
    return ( 
        <Box w='300px' h='180px' rounded='10px' overflow='hidden' boxShadow='large' bg='gray.600' _hover={{opacity:"80%"}}>
            <Image src={props.image} h='160px' w='300px'></Image>
            <Box p={1} className='cardinfo'>
                <p1>{props.title}</p1>
            </Box>
        </Box>
    )
}

export default QuizCard;