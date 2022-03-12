import React, {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const SignUp = ()=>{
    const location = useLocation()
    console.log(location)
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const navigate = useNavigate
    const collectdata = async (e)=>{
        e.preventDefault();
        console.log(name,email,password);
        try{
            const result = await fetch('http://localhost:5100/register',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name,email,password})
        })
       const resp = await result.json() 
       console.log(resp);
       navigate('/')
       localStorage.setItem('user',JSON.stringify(resp))
        }catch(err){
            console.log(err);
        }
        
       
    }
    return(
        <div className='register'>
            <h1>Register</h1>
            <h2>{location.state.transport}</h2>
            <div className='form'>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
                <input type='button' value='SignUp' onClick={collectdata} className='btn'/>
            </div>
        </div>
    )
}

export default SignUp