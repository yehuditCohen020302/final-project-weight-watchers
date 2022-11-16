import React from 'react';
import {useEffect} from 'react'
import { useParams , useHistory} from 'react-router-dom';
import {getUserById} from '../api/user.js'
import { InputLabel,Input, Button } from '@mui/material';

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
        <div >
        {/* className="divContainerUserPage" */}
            <h3 id="title">User Details:</h3>
            <div className="userDetails" >
                <InputLabel>id</InputLabel>
                <Input className="details" type="text" id="userId" />
                <InputLabel>first Name</InputLabel>
                <Input className="details" type="text" id="firstName" />
                <InputLabel>last Name</InputLabel>
                <Input className="details" type="text" id="lastName" />
                <InputLabel>city</InputLabel>
                <Input className="details" type="text" id="city" />
                <InputLabel>street</InputLabel>
                <Input className="details" type="text" id="street" />
                <InputLabel>house Number</InputLabel>
                <Input className="details" type="number" id="houseNumber" />
                <InputLabel>phone Number</InputLabel>
                <Input className="details" type="text" id="phoneNumber" />
                <InputLabel>email Address</InputLabel>
                <Input className="details" type="email" id="emailAddress" />
                <InputLabel>height</InputLabel>
                <Input className="details" type="number" id="height" />
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
                <Input type="number" id="BMI" /><br/>
                <Button className="btnToDiary" onClick={()=>passDiary()} >Enter to show your diary</Button>
            </div>
        </div>
    )
}

