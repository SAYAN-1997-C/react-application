import React from "react";
import NonUserPages from "./pages/UserPages/NonUserPages";
import UserPages from "./pages/UserPages/UserPages";
import { useEffect, useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

function App() {
  const [songArr, setSongArr] = useState([]);
  const [theme, setTheme] = React.useState('dark');
  useEffect(() => {
    axios
      .get(
        "https://api.napster.com/v2.0/playlists/pp.225974698/tracks?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm&limit=200"
      )
      .then((res) => {
        setSongArr(res.data.tracks);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  const user = true;
  return (
    !user ? <UserContext.Provider value={songArr}> <UserPages /> </UserContext.Provider> : <UserContext.Provider value={songArr}><NonUserPages /></UserContext.Provider>
  )
}

export default App;
