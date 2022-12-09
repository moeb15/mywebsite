import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import gitlogo from './assets/github-logo.png'
import linkedinlogo from './assets/linkedin.png'

const Mynavbar = () =>
  <Navbar bg="dark" expand="lg" variant='dark' sticky='top'>
    <Container fluid>
      <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/CV'>CV</Nav.Link>
          <Nav.Link as={Link} to='/projects'>Projects</Nav.Link>
          <Nav.Link as={Link} to='/interests'>Interests</Nav.Link>
          </Nav>
      
        <Nav className="ml-auto">
          <a href='https://github.com/moeb15'>
            <img src={gitlogo} className='git-logo' alt='' />
          </a>
          <a href='https://www.linkedin.com/in/mujtaba-bader-90279b14a/'>
            <img src={linkedinlogo} className='linkedin-logo' alt='' />
          </a>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

export default Mynavbar;