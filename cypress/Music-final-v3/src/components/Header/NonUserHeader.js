import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import Popup from "./Popup";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useState } from "react";

function NonUserHeader() {
  const navigate = useNavigate();

  const updateSearchText = (e) => {
    navigate('/')
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()
    navigate('/')
  }

  const handleUser = () => {

  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlelogout = () => {
    return (
      sessionStorage.clear(),
      navigate("/")
    )
  };
  const mail = sessionStorage.getItem("mailid");

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
              <p className="">MuZix</p>
            </div>
            {sessionStorage.getItem("mailid") === null && <div onClick={() => { return (navigate('/login')) }} className={`text-orange-100 transition duration-300 text-xl px-3 pt-[0.30rem] cursor-pointer hover:text-orange-600`}>
              Login
            </div>}
            {sessionStorage.getItem("mailid") !== null && <div onClick={() => navigate('/playlist')} className="text-orange-100 transition duration-300 text-xl px-3 pt-[0.30rem] cursor-pointer hover:text-orange-600">
              PlayList
            </div>}
            {sessionStorage.getItem("mailid") !== null && <div className="text-orange-100 transition duration-300 text-xl px-3 pt-[0.30rem] cursor-pointer hover:text-orange-600">
              <Popup />
            </div>}

            {sessionStorage.getItem("mailid") === null && <div onClick={() => navigate('/register')} className="text-orange-100 transition duration-300 text-xl px-3 pt-[0.30rem] cursor-pointer hover:text-orange-600">
              Register
            </div>}
            {sessionStorage.getItem("mailid") === null && <div onClick={() => navigate('/about')} className="text-orange-100 transition duration-300 text-xl px-3 pt-[0.30rem] cursor-pointer hover:text-orange-600">
              About
            </div>}
          </Nav>
          <form className="d-flex" onSubmit={formSubmitHandler}>

            {sessionStorage.getItem("mailid") !== null && <div className="pr-3">
              <Button
                // id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="w-10 whitespace-nowrap text-white bg-orange-400"
              >
                Dear {mail[0]}
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                className="mt-3"
              >
                <MenuItem onClick={handleClose}>Email: {mail}</MenuItem>
                <MenuItem onClick={handlelogout}>Logout</MenuItem>
              </Menu>
            </div>}
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