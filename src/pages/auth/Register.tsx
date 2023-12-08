import { Container, Card, Button, Form } from 'react-bootstrap';
import { EventTargetForm } from '../../types/EventTargetForm'
import { httpFetch } from '../../utils/http';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate()
  async function submitLogin(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const target = e.target as unknown as EventTargetForm;
      await httpFetch<{ token: string }>('auth/register', false, {}, {
        method: 'POST',
        body: JSON.stringify({
          email: target.elements.email.value,
          password: target.elements.password.value
        })
      });
      navigate('/login');
    } catch (error) {
      throw error as Error;
    }
  }


  return (
    <Container className='d-flex justify-content-center align-items-center vh-100' fluid={true}>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Register</Card.Title>
            <Form onSubmit={submitLogin}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RegisterPage;
