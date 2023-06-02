 

import axios from "axios"
import { useEffect,useState } from "react"
import DashboardHeader from "./dashboardheader";
import Favcard from "./Favcard";

export default function Viewfav()
{
    const[favarr,setFavarr] =useState([])


  

    

    useEffect(()=>{
        let   mailid=sessionStorage.getItem("mailid");


 
        axios.get(`http://localhost:9091/fav/view/${mailid}`)
           .then
            (
                (res)=>
                {
                  
                    setFavarr([...favarr,res.data]);
    
                    console.log(res.data);
                 
                }
            )
        .catch
        (
            (err)=>console.log("error occured " + err)
        )
    
    
                    },[] );
    


        return(
            <div>
                <DashboardHeader/>

                {
  favarr.map (fav=>
 {

 return    <Favcard   id={fav.id} content={fav.content} author={fav.author} urlimg={fav.urlToImage}/>
 })
      }
            </div>
        )
}