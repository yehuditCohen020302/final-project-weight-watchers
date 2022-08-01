
import React from 'react';
import {  useParams } from 'react-router-dom';
import {getUserDiary} from '../api/user'


export function UserDiary()
{ 
    const {id} = useParams();

    console.log('in userDiary');
    return (
        <div className='divContainerDiary' >
            <h1>your diary: </h1>
            <input type="button" value="click to load your diary" onClick={()=>getUserDiary(id)}/>
        </div>
    );

}