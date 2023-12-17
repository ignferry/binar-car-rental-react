import { Container } from 'react-bootstrap';
import Sidebar from '../components/dashboard/Sidebar';
import '../styles/dashboard.css';
import { Outlet, useNavigate } from 'react-router-dom';
import DashboardNavbar from '../components/dashboard/Navbar';
import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function DashboardLayout() {
  const [auth] = useLocalStorage('auth', {});
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.token) {
      return navigate('/login');
    }
  });

  return (
    <>
      <DashboardNavbar />
      <Sidebar />
      <Container fluid>
        <div id="page-content-wrapper">
          <Outlet />
        </div>
      </Container>
    </>
  );
}
