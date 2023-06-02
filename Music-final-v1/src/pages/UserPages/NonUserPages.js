import { Route, Routes } from "react-router-dom";
import NonUserHeader from "../../components/Header/NonUserHeader";
import Login from "../Auth/Login";
import About from "../Auth/About";
import Registration from "../Auth/Registration";
import Dashboard from "./Dashboard/Dashboard";
import Home from "../Home/Home";
import Footer from "../../components/Footer/Footer";
import UserPages from "./UserPages";
import Playlist from "./Playlist";
import PrivateRoute from '../../privateroute';
import PlaySong from "./PlaySong";


const NonUserPages = () => {
  const token = sessionStorage.getItem('mytoken');
  
  return (
    <div>
      <div className="bg-slate-900 min-h-screen md:h-full">
        <NonUserHeader />
        <Home />
        <Routes>
          <Route path="/" element={token !== null ? <PrivateRoute><Dashboard/></PrivateRoute>:<Dashboard/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/playlist" element={<Playlist />} /> */ }
          
          <Route exact path="/playlist" element={
            <PrivateRoute>
                   <Playlist></Playlist>
            </PrivateRoute>

            }></Route>
          <Route path="/register" element={<Registration />} />
          <Route path="/userpages" element={<UserPages />} />
          <Route path="/playsong" element={<PlaySong />} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
};

export default NonUserPages;
