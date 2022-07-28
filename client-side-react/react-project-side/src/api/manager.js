import React from 'react';
import axios from 'axios';
export default async function getUsers() {
    try {
      debugger
      const users= await axios.get('http://localhost:3000/users');
      console.log(users.length);
        return users
    }
    catch (error) {
        console.log('error in add user');
    }
}

