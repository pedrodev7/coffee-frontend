import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Café Colonial - Unidac</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cadastro">Cadastro de Clientes</Nav.Link>
            <Nav.Link href="/lista">Lista de Clientes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;