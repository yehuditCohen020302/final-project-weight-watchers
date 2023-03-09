import React from 'react';
import {useEffect} from 'react'
import { useParams , useHistory} from 'react-router-dom';
import {getUserById} from '../api/user.js'
import { InputLabel,Input, Button ,TextField} from '@mui/material';

export function UserPage(){
    
    const {id} = useParams();

    const history = useHistory();

    function passDiary(){
        history.push(`/${id}/diary`);
    }

    useEffect(() => {
         getUserById(id);}
    );

    return(
        <div className="divContainerUserPage">
            <h3 id="title">User Details:</h3>
            <div className="userDetails" >
            <InputLabel>id</InputLabel>
            <TextField id="userId"  variant="outlined" disabled/>
                <InputLabel>first Name</InputLabel>
                <TextField className="details" type="text" id="firstName" disabled/>
                <InputLabel>last Name</InputLabel>
                <TextField className="details" type="text" id="lastName" disabled/>
                <InputLabel>city</InputLabel>
                <TextField className="details" type="text" id="city" disabled/>
                <InputLabel>street</InputLabel>
                <TextField className="details" type="text" id="street" disabled/>
                <InputLabel>house Number</InputLabel>
                <TextField className="details" type="number" id="houseNumber" disabled/>
                <InputLabel>phone Number</InputLabel>
                <TextField className="details" type="text" id="phoneNumber" disabled/>
                <InputLabel>email Address</InputLabel>
                <TextField className="details" type="email" id="emailAddress" disabled/>
                <InputLabel>height</InputLabel>
                <TextField className="details" type="number" id="height" disabled/>
                <InputLabel>Weights</InputLabel>
                <table>
                    <thead>
                        <tr>
                            <th>-date-</th>
                            <th>-weight-</th>
                        </tr>
                    </thead>
                    <tbody id="weights"></tbody>
                </table>
                <InputLabel>BMI</InputLabel>
                <TextField type="number" id="BMI" /><br/>
                <Button className="btnToDiary" onClick={()=>passDiary()} >Enter to show your diary</Button>
            </div>
        </div>
    )
}

