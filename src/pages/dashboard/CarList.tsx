import { Button, Col, Container, Row } from 'react-bootstrap';
import CarCardDashboard from '../../components/dashboard/CarCardDashboard';
import { useNavigate } from 'react-router-dom';
import { httpFetch } from '../../utils/http';
import { useEffect, useState } from 'react';
import { Car } from '../../types/Car';

export default function DashboardCarListPage() {
  const [cars, setCars] = useState<Array<Car>>([]);
  const navigate = useNavigate();

  async function loadCars(size_type: string) {
    try {
      const json = await httpFetch<{
        page: number;
        limit: number;
        data: Array<Car>;
      }>(
        'cars',
        false,
        {
          page: 1,
          limit: 999,
          size_type: size_type,
        },
        {
          method: 'GET',
        },
      );
      setCars(json.data);
    } catch (err) {
      throw err as Error;
    }
  }

  useEffect(() => {
    loadCars('');
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h1>Cars</h1>
        <Button onClick={() => navigate('/dashboard/cars/create')}>
          Add Cars
        </Button>
      </div>

      <div className="d-flex mb-3">
        <Button className="me-2" onClick={() => loadCars('')}>
          All
        </Button>
        <Button className="me-2" onClick={() => loadCars('small')}>
          Small
        </Button>
        <Button className="me-2" onClick={() => loadCars('medium')}>
          Medium
        </Button>
        <Button className="me-2" onClick={() => loadCars('large')}>
          Large
        </Button>
      </div>

      <Container fluid>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {cars.map((c) => (
            <Col key={c.id}>
              <CarCardDashboard key={c.id} car={c} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
