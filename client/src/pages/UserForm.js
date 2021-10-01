import axios from 'axios'
import React, { useState } from 'react';
import { Button } from "@chakra-ui/react"

function UserForm() {
    const url = 'http://localhost:5000/posts';

    const [userData, setUserData] = useState({ name: '', score: 0 });
    const createUser = (newUser) => {axios.post(url, newUser)}
    const getUser = () => {axios.get(url)}


  return (
  <div>
        <Button onClick={() => console.log(getUser)}>GET STUFF</Button>
        <label>Username: </label>
        <input type="text" title="title" onChange={(e) => setUserData({...userData, name: e.target.value })} required></input>
        <br /> <br />
        <Button type="submit" onClick={() => createUser(userData)}>Submit</Button>
  </div>
  );
}

export default UserForm;