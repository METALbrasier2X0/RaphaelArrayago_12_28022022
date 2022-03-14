import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

import logo from './Assets/logo.png';

function Header(props) {
  return (
  <>

  <Navbar className="d-flex justify-content-between Header" variant="dark">
    <Navbar.Brand className="justify-self-start" href="#"><img
        src={logo}
        height="60px"
        className="d-inline-block align-top"

      />
      </Navbar.Brand>

      <Nav.Link href="#">Accueil</Nav.Link>
      <Nav.Link href="#">Profile</Nav.Link>
      <Nav.Link href="#">Réglage</Nav.Link>
      <Nav.Link href="#">Communauté</Nav.Link>
  </Navbar>


   <Navbar className="d-flex justify-content-center flex-column Header-sidemenu  " variant="dark">

   <Nav.Link href="#"></Nav.Link>
   <Nav.Link href="#"></Nav.Link>
   <Nav.Link href="#"></Nav.Link>
   <Nav.Link href="#"></Nav.Link>
  </Navbar>

</>
  ); 
}
export default Header;