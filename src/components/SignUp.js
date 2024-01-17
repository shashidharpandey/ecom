import React,{useState,useEffect} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
//import React, { useEffect } from 'react';

const SignUp =() =>{
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    //const navigate = useNavigate();

    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    })


    const collectData = async() =>{
        const baseUrl = 'http://localhost:5000/register';
        const data = {name,email,password};
        const result = await axios.post(baseUrl, data);
        console.log(result.data);
        localStorage.setItem("user",JSON.stringify(result));
        if(result){
            navigate('/');
        }
        }
    return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
            <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={collectData} className="appButton" type="button">Sign Up</button>
        </div>
    )
}

export default SignUp;