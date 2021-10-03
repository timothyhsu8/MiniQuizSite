import axios from 'axios'
import React, { useState } from 'react';
import { Button, Box, Center, VStack, Text, Input, Flex } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

function UserForm() {
    const url = 'http://localhost:5000/posts';

    const [userData, setUserData] = useState({ name: '', score: 0 });
    const createUser = (newUser) => {axios.post(url, newUser)}
    const getUser = () => {axios.get(url)}

    const submitted = (newUser) => {
      axios.post(url, newUser)  // Add new user to the database
    }

  return (
    <Box>
      <Center>
        <Flex height="90vh" alignItems="center" justifyContent="center">
          <VStack>
            <Text fontSize="40" fontWeight="thin">Enter Your Username</Text>
            <Input type="text" placeholder="User123" borderColor="gray.400" onChange={(e) => setUserData({...userData, name: e.target.value })} required></Input>
            <Link to={{pathname: "/homepage"}}>
              <Button color="white" backgroundColor="blue.500" type="submit" onClick={() => createUser(userData)}
              _hover={{bgColor:"blue.300"}}>Submit</Button>
            </Link>
            {/* <Button onClick={() => console.log(getUser)}>GET STUFF</Button> */}
          </VStack>
        </Flex>
      </Center>
    </Box>
  );
}

export default UserForm;