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
    return(
      // sessionStorage.setItem("mailid", ""),
      // sessionStorage.setItem("mytoken", ""),
      navigate('/')
    )
  }
  return (
    <Navbar expand="lg" className="overflow-hidden bg-slate-800 p-3">
      <Container fluid>
        {/* <Navbar.Brand href="/" className="text-white">Music Player</Navbar.Brand> */}
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
            {sessionStorage.getItem("mailid") ?.length !== 0 && <div onClick={() => {return(navigate('/login'))}} className="text-white text-xl px-3 pt-[0.30rem] cursor-pointer">
              Login
            </div>}
            {sessionStorage.getItem("mailid") ?.length === 0 && <div onClick={handleLogout} className="text-white text-xl px-3 pt-[0.30rem] cursor-pointer">
              Logout
            </div>}
            {/* {sessionStorage.getItem("mailid").length === 0 && <div onClick={() => navigate('/register')} className="text-white text-xl px-3 pt-[0.30rem] cursor-pointer">
              Register
            </div>} */}
            {sessionStorage.getItem("mailid")?.length === 0 && <div onClick={() => navigate('/register')} className="text-white text-xl px-3 pt-[0.30rem] cursor-pointer">
              Register
            </div>}
            {sessionStorage.getItem("mailid")?.length !== 0 && <div onClick={() => navigate('/about')} className="text-white text-xl px-3 pt-[0.30rem] cursor-pointer">
              About
            </div>}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="text-white">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NonUserHeader;
