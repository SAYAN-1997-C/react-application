import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { logo } from "../../assets";

function NonUserHeader() {
  const navigate = useNavigate();
  const handleLogout = () => {
    return (
      sessionStorage.clear(),
      navigate("/")
    )
  }
  const updateSearchText = (e) => {
    navigate('/')
    // props.setSearchText(e.target.value)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()
    navigate('/')
  }
  const [keyword, setKeyword] = useState();
  return (
    <Navbar expand="lg" className="overflow-hidden bg-slate-800 p-3 sticky top-0 z-50">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div onClick={() => navigate('/')} className="text-white text-2xl px-3 flex cursor-pointer">
              <img src={logo} style={{ width: "40px", paddingRight: '3px' }} />
              <p className="appname">MuZix</p>
            </div>
            {sessionStorage.getItem("mailid") === null && <div onClick={() => { return (navigate('/login')) }} id="loginbutton" className={`text-orange-100 transition duration-300 text-xl px-3 pt-[0.30rem] cursor-pointer hover:text-orange-600`}>
              Login
            </div>}
            {sessionStorage.getItem("mailid") !== null && <div onClick={() => navigate('/playlist')} id="playlistbutton" className="text-orange-100 transition duration-300 text-xl px-3 pt-[0.30rem] cursor-pointer hover:text-orange-600">
              PlayList
            </div>}
            {sessionStorage.getItem("mailid") !== null && <div onClick={handleLogout} id="logoutbutton" className="text-orange-100 transition duration-300 text-xl px-3 pt-[0.30rem] cursor-pointer hover:text-orange-600">
              Logout
            </div>}
            {sessionStorage.getItem("mailid") === null && <div onClick={() => navigate('/register')} id="registerbutton" className="text-orange-100 transition duration-300 text-xl px-3 pt-[0.30rem] cursor-pointer hover:text-orange-600">
              Register
            </div>}
            {sessionStorage.getItem("mailid") === null && <div onClick={() => navigate('/about')} className="text-orange-100 transition duration-300 text-xl px-3 pt-[0.30rem] cursor-pointer hover:text-orange-600">
              About
            </div>}
          </Nav>
          <form className="d-flex" onSubmit={formSubmitHandler}>
            <input className="form-control me-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              // value={props.searchText}
              onChange={updateSearchText} />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NonUserHeader;