import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login =()=>{
    const [password,setPassword] = React.useState("");
    const [email,setEmail] = React.useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    })
    const handleLogin= async ()=>{
        console.warn(email,password)
        let result = await fetch('http://localhost:5000/login',{
            method:'post',
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        
        if(result.auth){
            localStorage.setItem("user",JSON.stringify(result.user));
            localStorage.setItem("token",JSON.stringify(result.auth));
            navigate("/");

        }else{
            alert("Please enter correct derails");
        }

    }
    return(
        <div className="register">
           <h1>Login</h1> 
            <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={handleLogin} className="appButton" type="button">Sign Up</button>
        </div>
    )
}

export default Login;