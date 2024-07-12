import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function Menu() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="sm">
          <Container fluid>
            <Link to="/">
              <img src={logo} width="48" />
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="ms-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/contato">
                  Contato
                </Link>
                <Link className="nav-link" to="/cadastro">
                  Cadastro
                </Link>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Menu;
