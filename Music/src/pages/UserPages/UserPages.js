import { Route, Routes } from "react-router-dom";
import UserHeader from "../../components/Header/UserHeader";
import Dashboard from "./Dashboard/Dashboard";
import Login from "../Auth/Login";

const UserPages = () => {
  
  return (
    <div className="overflow-hidden">
      <div className="bg-slate-900 h-[100vh] ">
        <UserHeader />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default UserPages;
