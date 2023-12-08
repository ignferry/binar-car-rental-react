import { Navbar, Container, Nav } from "react-bootstrap"
import { UserInfoContext, TUserInfoContext } from "../../context/userInfo"
import { ContextType, useContext, Context } from 'react'
import { useNavigate } from "react-router-dom";

export default function DashboardNavbar() {
    const navigate = useNavigate();
    const { userInfo } = useContext(UserInfoContext) as ContextType<Context<TUserInfoContext>>
    const logout = () => {
        localStorage.removeItem("auth");
        navigate("/login");
    }
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top">
        <Container>
          <Navbar.Brand href="#home">BCR Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {userInfo && (<Nav.Link disabled>{userInfo.email}</Nav.Link>)}
              <Nav.Link eventKey={2} onClick={logout}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}