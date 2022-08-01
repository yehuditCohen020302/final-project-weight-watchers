import React from 'react';
import {useEffect} from 'react'
import { useParams , useHistory} from 'react-router-dom';
import {getUserById} from '../api/user.js'

export function UserPage(){
    
    const {id} = useParams();

    const history = useHistory();

    function passDiary(){
        history.push(`/userPage/${id}/diary`);
    }

    useEffect(() => {
         getUserById(id);}
    );

    return(
        <div className="divContainerUserPage">
            <h3 id="title">User Details:</h3>
            <div id="userDetails" >
                <label>id</label>
                <input className="details" type="text" id="userId" /><br />
                <label>first Name</label>
                <input className="details" type="text" id="firstName" /><br />
                <label>last Name</label>
                <input className="details" type="text" id="lastName" /><br />
                <label>city</label>
                <input className="details" type="text" id="city" /><br />
                <label>street</label>
                <input className="details" type="text" id="street" /><br />
                <label>house Number</label>
                <input className="details" type="number" id="houseNumber" /><br />
                <label>phone Number</label>
                <input className="details" type="text" id="phoneNumber" /><br />
                <label>email Address</label>
                <input className="details" type="email" id="emailAddress" /><br />
                <label>height</label>
                <input className="details" type="number" id="height" /><br />
                <label>Weights</label>
                <table>
                    <thead>
                        <tr>
                            <th>date</th>
                            <th>weight</th>
                        </tr>
                    </thead>
                    <tbody id="weights"></tbody>
                </table>
                <label>BMI</label>
                <input type="number" id="BMI" /><br/>
                <input type="button" className="btnToDiary" onClick={()=>passDiary()} value="Enter to show your diary"/>
            </div>
        </div>
    )
}

