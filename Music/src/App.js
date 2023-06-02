import React from "react";
import NonUserPages from "./pages/UserPages/NonUserPages";
import UserPages from "./pages/UserPages/UserPages";

function App() {
  let user = false;
  let item = sessionStorage.getItem("mytoken");
  let email = sessionStorage.getItem("mailid");
  console.log(item);
  console.log(email);
  
  
  
  return(
    
    user ? <UserPages/> : <NonUserPages/>
    // <div>
    //   true ? <UserPages/> : <Home/>
    // </div>
  )
}

export default App;
