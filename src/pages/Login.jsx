import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow border-0">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Symbol.png"
                  alt="Swiggy Logo"
                  height="40"
                  className="mb-3"
                />
                <h4>Welcome back</h4>
                <p className="text-muted">Sign in to continue</p>
              </div>
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FiMail />
                    </span>
                    <Form.Control 
                      type="email" 
                      placeholder="Enter your email" 
                      required 
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FiLock />
                    </span>
                    <Form.Control 
                      type="password" 
                      placeholder="Enter your password" 
                      required 
                    />
                  </div>
                  <div className="d-flex justify-content-end mt-2">
                    <Link to="/forgot-password" className="text-decoration-none">
                      Forgot password?
                    </Link>
                  </div>
                </Form.Group>

                <Button 
                  variant="success" 
                  type="submit" 
                  className="w-100 mb-3"
                  size="lg"
                >
                  Sign In
                </Button>

                <div className="text-center">
                  <p className="text-muted mb-0">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-decoration-none">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;