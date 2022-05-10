import { Navbar, Container, Nav, NavDropdown, Button} from "react-bootstrap"

export default function Navigation() {
  return (
    <Navbar bg="light" expand="sm" variant="light" >
        <Container>
            <Navbar.Brand className="fw-bold fs-4" href="#home">LA CONSIGNE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Products</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Button variant="dark ms-2">Login</Button>
                <Button variant="dark ms-2">Register</Button>
                <Button variant="dark ms-2">Cart (0)</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
