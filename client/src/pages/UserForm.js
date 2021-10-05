import axios from 'axios'
import React, { useState } from 'react';
import { Button, Box, Center, VStack, Text, Input, Flex } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

function UserForm() {
    const url = 'http://localhost:5000/users/create';
    const url2 = 'http://localhost:5000/users';

    const [userData, setUserData] = useState({ name: '', score: 0 });
    const [allUsers, setAllUsers] = useState([]);
    const createUser = (newUser) => {axios.post(url, newUser)}
    const getUser = (newUser) => {axios.get(url, newUser)}

    const getAllUsers = () =>{
      axios.get(url)
      .then(res => {
        console.log(res.data)
        setAllUsers(res.data)
      })
      .catch(function (error) {
          console.log(error);
      })
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
            {/* <Button bgColor="blue.200" onClick={() => getAllUsers()}>GET STUFF</Button> */}
          </VStack>
        </Flex>
      </Center>
    </Box>
  );
}

export default UserForm;