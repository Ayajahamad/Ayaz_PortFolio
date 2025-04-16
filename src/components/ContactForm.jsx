import { useState } from "react";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import "./ContactForm.css"; // Import your custom CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-form-background">
      <Container id="contact">
        <Card className="shadow-sm border-0 mx-auto contact-card">
          <Card.Body className="p-4">
            <h2 className="text-center fw-bold mb-4">Get in Touch</h2>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <Form.Group controlId="contactName">
                    <Form.Label className="fw-semibold">Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="contactEmail">
                    <Form.Label className="fw-semibold">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="contactMessage" className="mb-3">
                <Form.Label className="fw-semibold">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your message"
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                  size="md"
                  className="px-4 custom-submit-btn"
                >
                  Send Message
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ContactForm;
