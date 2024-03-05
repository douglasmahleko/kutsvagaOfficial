// import NavBar from "./navBar"
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import HomeNav from "./navBar/homeNav";

function Home({backendActor}){

    const [uname, setUname] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) =>{
            e.preventDefault()
            
    }

    return(
        <div className='home'>
            <HomeNav />
            <h1>Welcome Home</h1>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type='text' placeholder = "enter you username" name = "uname" onChange={(e)=> setUname(e.target.value)} value = {uname} /><br />
                <label>Password: </label>
                <input type='password' placeholder = "enter you password" name = "password" onChange={(e) => setPassword(e.target.value)} value = {password} /><br />
                <button >Login</button>
            </form>
        </div>
    )
}
export default Home
