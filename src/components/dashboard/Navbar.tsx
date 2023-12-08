import { Navbar, Container, Nav } from "react-bootstrap"

export default function DashboardNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top">
        <Container>
          <Navbar.Brand href="#home">BCR Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#deets" disabled>User</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}