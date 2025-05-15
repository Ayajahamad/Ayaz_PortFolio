import { useState } from "react";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Create unique callback name
  const callbackName = `jsonp_${Date.now()}`;
  
  // Create URL parameters
  const params = new URLSearchParams({
    name: formData.name,
    email: formData.email,
    message: formData.message,
    callback: callbackName
  });

  // Create script element
  const script = document.createElement('script');
  script.src = `https://script.google.com/macros/s/AKfycbyXJi-utbIDB-s58SKIO1PPBzaO5fI_ECFGuVpa5NwiNWGMMZ2mQcofh0TECuS9sKTs/exec?${params}`;

  // Define callback handler
  window[callbackName] = (response) => {
    // Cleanup
    delete window[callbackName];
    document.body.removeChild(script);
    setIsSubmitting(false);

    if (response.success) {
      alert("Message sent successfully! \n\nWill Get back to you soon..!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert(`Error: ${response.error || 'Unknown error'}`);
    }
  };

  // Add error handler
  script.onerror = () => {
    delete window[callbackName];
    document.body.removeChild(script);
    setIsSubmitting(false);
    alert("Failed to connect to server");
  };

  // Execute request
  document.body.appendChild(script);
};

  return (
    <div className="contact-form-background">
      <Container id="contact">
        <Card className="shadow-sm border-0 mx-auto contact-card">
          <Card.Body className="p-4">
            <h2 className="text-center fw-bold mb-4">Get in Touch</h2>
            <Form onSubmit={handleSubmit}>
              {/* Keep the existing form structure */}
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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