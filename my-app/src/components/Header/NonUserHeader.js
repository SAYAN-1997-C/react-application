import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NonUserHeader() {
  return (
    <Navbar  expand="lg" className="overflow-hidden bg-gray-900 p-3">
    <Container fluid>
      <Navbar.Brand className="text-white">Music Player</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link  className="text-white"><Link to='/login' className="text-white" >Login</Link></Nav.Link>
          <Nav.Link  className="text-white"><Link to='/signin' className="text-white" >Register</Link></Nav.Link>
          <Nav.Link className="text-white"><Link to='/signin' className="text-white" >About</Link></Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success" className="text-white">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NonUserHeader;