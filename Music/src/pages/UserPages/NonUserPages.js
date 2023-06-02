import { Route, Routes } from "react-router-dom";
import NonUserHeader from "../../components/Header/NonUserHeader";
import Login from "../Auth/Login";
import About from "../Auth/About";
import Registration from "../Auth/Registration";
import Dashboard from "./Dashboard/Dashboard";
import Home from "../Home/Home";
import Footer from "../../components/Footer/Footer";

const NonUserPages = () => {
  return (
    <div>
      <div className="bg-slate-900 h-screen md:h-full">
        <NonUserHeader />
        <Home />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
};

export default NonUserPages;
