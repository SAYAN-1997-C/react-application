import axios from "axios"
import { useEffect,useState } from "react"
 import Newscard from "./newscard";
import "./dashboard.css";
import DashboardHeader from "./dashboardheader";

export default function Dashboard()
{
    const[newsarr,setNewsarr] =useState([])


   const addNews=(data)=>{


        axios.post('http://localhost:3005/mynews',data,
        {
         headers: {
             'Content-type': 'application/json'
         }
        })
        .then
        (
         res=>
             {
             setNewsarr([...newsarr,res.data]);
             }
        )
        .catch
        (
     err=>console.log("error " + err)
     
        )
     }


    

    useEffect(()=>{
 
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apikey=7f118af83e1b48f6939fc5096e89fd22&page=1')
         .then
            (
                (res)=>
                {
                  
                    console.log(res.data.articles);
    
                 setNewsarr(res.data.articles);
                 
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
                
                 <div className="clsnews">            
 {newsarr.map (news=>
      <Newscard content={news.content} author={news.author} urlimg={news.urlToImage} addNewsHandler={addNews} />)
       }
            </div>
</div>
          
        )
}