import React, { useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import { sLogin } from './loginStore';
import Loading from './partials/Loading';
import { loginEmail } from './services/loginUserByEmail';


export default function Login() {
    const inputRef = useRef();
    const nav =useNavigate();
    const isLoading=sLogin.use();
    
    
    const handleClick=()=>{
        sLogin.set(true);
        loginEmail(inputRef.current.value,nav);
        }
 
    if(isLoading){
        return<Loading/>
    }

    return (
    <>
        <input ref = {inputRef}/>
        <button onClick={handleClick}> Submit </button>
    </>
  )
}
