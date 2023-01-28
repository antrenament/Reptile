import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="../../public/media/logo_new.jpg"
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* de rezolvat marginea intre elementele din navigatie */}
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                        <Nav.Link href="#link">Our Breeders</Nav.Link>
                        <Nav.Link href="#link">Available dragons</Nav.Link>
                        <Nav.Link href="#link">Care Guide</Nav.Link>
                        <Nav.Link href="#link">Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;