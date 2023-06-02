import { useState } from "react";
import axios from "axios"
import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Header from "./header";
// import { makeStyles } from '@material-ui/core/styles';
import Alert from '@mui/material/Alert'
import './register.css'
export default function Register()
{


    

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     width: '100%',
  //     '& > * + *': {
  //       marginTop: theme.spacing(2),
  //     },
  //   },
  // }));
  
 
    const[mailid,setMailid]=useState('');
    const[name,setName]=useState('');
    const[password,setPassword]=useState('');
    const[addr,setAddr]=useState('');

  const saveUser=( (e)=>
  {
    e.preventDefault();



        const userdata={
         mailid,
         name,
         password,
         addr
     };

  //  const userdata=
  //    {"mailid":'mary@gmail.com', "name":'mary', "password":'password', "addr":'chennai'}
     console.log(userdata);
    
       axios.post('http://localhost:9000/auth/adduser',
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
          //   setStudentarr([...studentarr,res.data]);
             }
        )
        .catch
        (
     err=>console.log("error " + err)
     
        )
     
     
    
     setOpen(true);
    // props.addStudentEvt(userdata);
      
  })

  // const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
    if (reason === 'clickaway') {
      return;
    }
  }


    return(
       
   <div className="clsadd">
      <Header/>
     <h5>  REgistration </h5>
<form className="clsform" onSubmit={ (evt)=>saveUser(evt)}>
  
  <input type="text"   defaultValue={mailid} placeholder="enter emailid" onChange={ (evt)=> setMailid(evt.target.value)}/>
  
  <input type="text"  defaultValue={name} placeholder="enter name"  onChange={ (evt)=> setName(evt.target.value)}/>
  
  <input type="password"   defaultValue={password} placeholder="enter password"  onChange={ (evt)=> setPassword(evt.target.value)}/>
  <input type="text"  defaultValue={addr} placeholder="enter address"  onChange={ (evt)=> setAddr(evt.target.value)}/>
  
  <button type="submit">submit</button>

  <Button variant="outlined" onClick={handleClick}>
        click
      </Button>

  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
              Student Record Addedd Successfully
        </Alert>
      </Snackbar>

      {/* <Alert severity="success">This is a success message!</Alert> */}


</form>




   </div>




    );
    }