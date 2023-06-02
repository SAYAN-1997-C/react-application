import { Route, Routes } from "react-router-dom";
import UserHeader from "../../components/Header/UserHeader";
import Dashboard from "../UserPages/Dashboard/Dshboard";

const UserPages = () => {
  
  return (
    <div className="flex h-full sm:overflow-hidden">
      <div className="flex-col flex-1 h-full bg-slate-800">
        <UserHeader />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserPages;
