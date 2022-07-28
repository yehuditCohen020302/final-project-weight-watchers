import React from 'react';
import {getUsers} from "../api/manager"

export function ManagerPage()
{
    return (
        <div className='containers'>
            <h1>"Welcome to Manager"</h1>
            <button onClick={getUsers}>Click me to load all users</button>
            <table className='usersTable'></table>
            <div className='div'></div>
        </div>
    )
}
 

