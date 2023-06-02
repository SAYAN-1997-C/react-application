import React from "react";
import NonUserPages from "./pages/UserPages/NonUserPages";
import UserPages from "./pages/UserPages/UserPages";

function App() {
  const user = false;
  return(
    user ? <UserPages/> : <NonUserPages/>
  )
}

export default App;
