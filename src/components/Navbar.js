import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
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
          <NavDropdown menuVariant='dark' title='Socials'>
            <NavDropdown.Item href='https://github.com/moeb15'>
              <img src={gitlogo} className='git-logo' alt='' />
              Github
            </NavDropdown.Item>
            <NavDropdown.Item href='https://www.linkedin.com/in/mujtaba-bader-90279b14a/'>
              <img src={linkedinlogo} className='linkedin-logo' alt='' />
              Linkedin
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

export default Mynavbar;