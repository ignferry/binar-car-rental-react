import { Container } from "react-bootstrap";
import Sidebar from "../components/dashboard/Sidebar";
import "../styles/dashboard.css"
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/dashboard/Navbar";

export default function DashboardLayout() {
    return (
        <>
            <DashboardNavbar/>
            <Sidebar/>
            <Container fluid>
                <div id="page-content-wrapper">
                    <Outlet/>
                </div>
            </Container>
        </>
    )
}