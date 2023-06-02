import { Route, Routes } from "react-router-dom";
import NonUserHeader from "../../components/Header/NonUserHeader"
import Login from "../Auth/Login";
import About from "../Auth/About";
import Registration from "../Auth/Registration";
import Dashboard from "./Dashboard/Dshboard";


const NonUserPages = () => {
  
  return (
    <div>
      <div className="">
        <NonUserHeader />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Registration />} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default NonUserPages;
