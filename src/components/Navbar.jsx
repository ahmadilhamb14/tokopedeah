import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="my-navbar bg-body-tertiary" bg='success' style={{position:'fixed', width: '100%', zIndex: '5'}}>
      <Container
      fluid
      style={{ 
        padding: '0 2rem 0 3rem'
       }}
      >
        <Navbar.Brand href="#" style={{ color: 'green', fontWeight: 'bold' }}>TokoPedeah</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ height: '3rem', display:'flex', alignItems: 'center' , marginLeft: '1rem'}}
            navbarScroll
          >
            <Nav.Link href="#action1">Kategori</Nav.Link>
          </Nav>
          <Form className="d-flex" style={{ width: '100%', marginLeft: '1rem'}}>
            <Form.Control
              type="search"
              placeholder="Cari di tokopedeah"
              className="me-2"
              aria-label="Search"
              style={{ color: '#DCDCDC'}}              
            />
          </Form>
          <i class="fa-solid fa-cart-plus" style={{ margin: '0 3rem 0 2rem' }}></i>
          <Button 
                variant="success"
                style={{ marginRight: '0.75rem' }}
            ><a href="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</a></Button>
          <Button variant="outline-success"><a href="/register" style={{ color:'green', textDecoration:'none' }}>Register</a></Button>            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;