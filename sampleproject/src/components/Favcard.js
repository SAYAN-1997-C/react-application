 
import axios from "axios"
import React from 'react';
import { useEffect,useState } from "react"

export default function Favcard(props){

    const[id,setId]=useState('');
    const[content,setContent]=useState('');
    const[author,setAuthor]=useState('');
    const[urlToImage,setUrlimg]=useState('');
    
   
  
    useEffect(()=>{
      setId(props.id);
    setContent(props.content);
    setAuthor(props.author);
    setUrlimg(props.urlToImage);
    },[])
    
  
    const deleteFav = ()=>
     {
   
     
                 
          // props.addNewsHandler(datatoadd);
  
          console.log("deleted");

         //axios.delete 
   
     }
  
      return(
  
  
    
     
      <div className='clscard'>
           <span> {content}</span>
          
           <span> <b> Author: {author} </b></span>
              <img src={urlToImage} alt="noimage"></img>
  <button onClick={deleteFav}>Delete</button>
              </div>  
  
  
  
      )
  
  
  
  }