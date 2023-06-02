import axios from "axios"
import React from 'react';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import Header from "./header";
export default function Login()
{

    const [mailid,setMailid] = useState("");
    const [password,setPassword] = useState("");


    let navigate = useNavigate();

    const forwardEvt =()=>
    {
        navigate(-1);
    }
    const handleEvent = () =>
    {

        const userdata={
            mailid,
                password
         
        };
   
sessionStorage.setItem("mailid",mailid);
        console.log(userdata);
       
          axios.post('http://localhost:9000/auth/login',
          userdata,
           {
            headers: {
                   'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
           //  body: JSON.stringify(userdata)
           })
           .then
           (
            res=>
                {
                 console.log(res)
                 sessionStorage.setItem("mytoken",res.data.token);
                 navigate("/dashboard");

             //   setStudentarr([...studentarr,res.data]);
                }
           )
           .catch
           (
        err=>console.log("error " + err)
        
           )
        

    //    // localStorage.setItem("namekey", name);
    //    if(mailid!=null && password!=null )
    //    {
    //       //sessionStorage.setItem("loggedin", "true");
    //       navigate("/dashboard");
    //    }
    //    else
    //    sessionStorage.clear();

    }

return (
<div>
<Header/>

    <div className='clslogin'>
   
        <h1> Login Form </h1>

        <input type="text" value={mailid} onChange={(evt)=>setMailid(evt.target.value)}/>
        <input type="password" value={password} onChange={(evt)=>setPassword(evt.target.value)}/>
        <div>
       
        <button onClick={forwardEvt}> Back </button>

        <Button variant="contained" color="secondary" onClick={handleEvent}>
            Login
</Button>
        </div> 
    </div>
    </div>


)


}