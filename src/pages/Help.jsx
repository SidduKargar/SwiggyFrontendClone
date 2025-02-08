import { Container, Accordion, Form, Button } from 'react-bootstrap';
import { FiHelpCircle } from 'react-icons/fi';

function Help() {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h2>
          <FiHelpCircle className="me-2" />
          How can we help you?
        </h2>
        <p className="text-muted">Find answers to your questions</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <Form className="mb-5">
            <Form.Control
              type="search"
              placeholder="Search for help topics"
              className="mb-3"
              size="lg"
            />
          </Form>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>How do I place an order?</Accordion.Header>
              <Accordion.Body>
                To place an order, simply browse restaurants, select your items, add them to cart, and proceed to checkout. You'll need to be logged in to complete your order.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>What payment methods are accepted?</Accordion.Header>
              <Accordion.Body>
                We accept various payment methods including credit/debit cards, UPI, net banking, and cash on delivery.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>How do I track my order?</Accordion.Header>
              <Accordion.Body>
                Once your order is confirmed, you can track it in real-time through the order tracking page. You'll also receive updates via SMS and email.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div className="text-center mt-5">
            <h5>Still need help?</h5>
            <Button variant="success" className="mt-3">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Help;