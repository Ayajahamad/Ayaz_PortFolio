import { Container, Row, Col, Image, Badge, Button, Card } from "react-bootstrap";
import resumeFile from "../assets/resume/Ayaj_Ahamad_Software_Developer.pdf";
import profile from "../assets/images/profile.avif";
import './About.css'; // 👈 Make sure this CSS file exists and is imported

const About = () => {
  return (
    <div className="about-section" id="about">
      <Container className="py-5 d-flex justify-content-center">
        <Card className="about-card p-4 shadow-lg">
          <Row className="align-items-center justify-content-between">
            {/* Left Column - Profile Image and Short Intro */}
            <Col md={4} className="text-center mb-4 mb-md-0">
              <Image
                src={profile}
                roundedCircle
                fluid
                alt="Ayaj Ahamad"
                className="profile-img"
              />
              <p className="mt-3 about-intro">
                Hello! I'm <strong>Ayaj Ahamad</strong>, a passionate software developer specializing in <strong>Python (Flask, FastAPI, Django)</strong> and databases like <strong>MySQL, PostgreSQL, and MSSQL</strong>. I focus on backend development, database optimization, and API integration, ensuring efficient and scalable solutions.
              </p>
            </Col>

            {/* Right Column - Info */}
            <Col md={7}>
              <h2 className="fw-bold mb-3 section-title">About Me</h2>

              <h4 className="fw-semibold mt-4">Skills</h4>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <Badge bg="primary">Python</Badge>
                <Badge bg="secondary">SQL</Badge>
                <Badge bg="success">Flask</Badge>
                <Badge bg="info">FastAPI</Badge>
                <Badge bg="warning" text="dark">Django</Badge>
                <Badge bg="danger">PostgreSQL</Badge>
                <Badge bg="dark">MSSQL</Badge>
                <Badge bg="info">JavaScript</Badge>
                <Badge bg="success" text="dark">API Development</Badge>
              </div>

              <h4 className="fw-semibold mt-4">Education & Experience</h4>
              <p className="about-details">
                🎓 <strong>Bachelor of Engineering (CSE)</strong> – Anjuman Institute of Technology and Management, 2023 (CGPA: 7.1)
                <br /><br />
                💼 <strong>Software Developer</strong> – Agile Health Technologies
                <br /><br />
                🏆 Experience in database optimization, ETL pipelines, and backend development in the healthcare domain.
              </p>

              <div className="mt-4">
                <a
                  href={resumeFile}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button size="lg" className="resume-btn">
                    Download Resume (PDF)
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default About;
