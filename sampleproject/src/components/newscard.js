import  './newscard.css'
import axios from "axios"
import React from 'react';
import { useEffect,useState } from "react"

export default function Newscard(props)
{
  const[mailid,setMailid]=useState('');
  const[content,setContent]=useState('');
  const[author,setAuthor]=useState('');
  const[urlToImage,setUrlimg]=useState('');
  
 

  useEffect(()=>{
    setMailid(sessionStorage.getItem("mailid"));
  setContent(props.content);
  setAuthor(props.author);
  setUrlimg(props.urlimg);
  },[])
  

  const storeData = ()=>
   {
 
    const datatoadd = {
                     mailid,
                    content,
                    author,
                    urlToImage
                }
               
        // props.addNewsHandler(datatoadd);

        console.log(datatoadd);
        axios.post('http://localhost:9091/fav/add',
        datatoadd,
         {
          headers: {
                 'Accept': 'application/json',
              'Content-Type': 'application/json' ,
             'Authorization':`Bearer ${sessionStorage.getItem("mytoken")}`
          },
        
         })
         .then
         (
          res=>
              {
               console.log(res)
          
              }
         )
         .catch
         (
      err=>console.log("error " + err)
      
         )

 
   }

    return(


  
   
    <div className='clscard'>
         <span> {content}</span>
        
         <span> <b> Author: {author} </b></span>
            <img src={urlToImage} alt="noimage"></img>
<button onClick={storeData}>Add Favourite</button>
            </div>  



    )



}