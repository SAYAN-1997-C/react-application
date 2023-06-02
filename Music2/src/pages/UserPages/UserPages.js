import { Route, Routes } from "react-router-dom";
import React from "react";
import UserHeader from "../../components/Header/UserHeader";
import Dashboard from "./Dashboard/Dashboard";
import Login from "../Auth/Login";
import Playlist from "./Playlist";
import Footer from "../../components/Footer/Footer";


const UserPages = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-slate-900 h-screen">
          <UserHeader />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/playlist" element={<Playlist />} />
          </Routes>
        <Footer/>
      </div>
    </div>
  );
};

export default UserPages;
