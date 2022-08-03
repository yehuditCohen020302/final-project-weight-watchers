import React,{useState} from 'react';
import userIcon from '../images/user-icon.svg';
import '../css/homePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import {getUserById} from "../api/user"
import { getUsers } from '../api/manager';


export function HomePage()  
{
    const history = useHistory();

    const [id,setId]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');


    async function signInUser(id) {
        await getUserById(id);
        history.push(`/userPage/${id}`);
    }
    async function signInManager(email, password) {
        alert("manager details: "+email+" , "+password);
        // await signManager(email,password);
        await getUsers();
        history.push("/managerPage");
    }

    return (
        <div className="body">
            <div className="login-form">
                <div className="login-form-text">
                    <div className="sign-in-title">
                        <img src={userIcon} alt="user-icon" className="icon"></img>
                        <h1>Sign In</h1>
                    </div>
                    <br></br>
                    <div>
                        <div className="form-group">
                            <input type="password" className="form-control form-input" id="password" placeholder="Enter your id" value={id} onChange={(e)=>setId(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <input type="button" className="form-control" id="login" value="Login as a user" onClick={()=>signInUser(id)}></input>
                        </div>
                    </div>
                    <br/>
                    <div>
                    <div className="form-group">
                            <input type="email" className="form-control form-input" id="email" placeholder="Enter the manager email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-input" id="password" placeholder="Enter the manager password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <input type="button" className="form-control" id="login" value="Login as a manager" onClick={()=>signInManager(email,password)}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wellcome-container">
                <h1 className="wellcome-title">Welcome to the Weight Watchers group</h1>
            </div>
        </div>
    )
}

