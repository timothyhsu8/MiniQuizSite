import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Button, Box, Center, VStack, Text, Input, Flex } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

function UserForm() {
    const url = '/users/create';

    const [databaseUsers, setDatabaseUsers] = useState([])
    const [userData, setUserData] = useState({ name: '', score: 0 });
    const createUser = (newUser) => {axios.post(url, newUser)}
   
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
   
    const submit = () => {
      let user = databaseUsers.find(element => element.name === userData.name)
      if(user === undefined)
        createUser(userData)
    }


  return (
    <Box>
      <Center>
        <Flex height="90vh" alignItems="center" justifyContent="center">
          <VStack>
            <Text fontSize="40" fontWeight="thin">Enter Your Username</Text>
            <Input type="text" placeholder="User123" borderColor="gray.400" onChange={(e) => setUserData({...userData, name: e.target.value })} required></Input>
            <Link to={{pathname: "/homepage", state:{ username:userData.name } }}>
              <Button color="white" backgroundColor="blue.500" type="submit" onClick={() => submit()}
              _hover={{bgColor:"blue.300"}}>Submit</Button>
            </Link>
          </VStack>
        </Flex>
      </Center>
    </Box>
  );
}

export default UserForm;