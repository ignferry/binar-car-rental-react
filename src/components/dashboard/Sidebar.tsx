import { Nav } from 'react-bootstrap';

export default function Sidebar() {
  return (
    <>
      <Nav className="d-flex flex-column bg-light sidebar" activeKey="/home">
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="/dashboard">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/dashboard/cars">Cars</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
