import { useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import cafe from "../assets/images/cafe.png";
import emp from "../assets/images/emp.png";
import "./Portfolio.css"; // Import custom CSS

const projects = [
  {
    title: "Senscio (Professional Project – Ongoing)",
    description:
      "Developed financial metrics such as Amount Expected, Amount Denied, and Amount Paid. Built aging reports to track transaction delays and improve payment collection, along with enhancing management dashboards.",
    tech: "Python, PostgreSQL, MySQL, React",
    image: "https://picsum.photos/seed/senscio/600/400",
    link: "https://github.com/Ayajahamad/senscio"
  },
  {
    title: "Automatic Attendance Management System (College Project)",
    description:
      "Designed a system to automatically detect and update student attendance using facial recognition. Implemented a dashboard for faculty to monitor attendance and generate reports.",
    tech: "Python, Deep Learning, Machine Learning, React",
    image: "https://picsum.photos/seed/attendance/600/400",
    link: "https://github.com/Ayajahamad/attendance-system"
  },
  {
    title: "Employee Management System (Personal Project)",
    description:
      "Built a web application to manage job seeker profiles and enable resume uploads. Implemented secure authentication and CRUD operations, allowing hiring managers to download resumes and manage user data.",
    tech: "Python (FastAPI), HTML, CSS, JavaScript",
    image: emp,
    link: "https://react-user-api-amber.vercel.app/"
  },
  {
    title: "API Development (Personal Projects)",
    description:
      "Developed multiple RESTful APIs using Flask, Django, and FastAPI. Integrated Swagger for documentation and tested the APIs using Postman.",
    tech: "Flask, Django, FastAPI",
    image: "https://picsum.photos/seed/api/600/400",
    link: "https://github.com/Ayajahamad/api-projects"
  },
  {
    title: "Cafe Site",
    description:
      "Developed a fully responsive website for a local cafe featuring an online menu, reservation system, and customer feedback integration.",
    tech: "HTML, CSS, JavaScript, React",
    image: cafe,
    link: "https://ayajahamad.github.io/Coffee-Shop/index.html"
  },
  {
    title: "Database Design",
    description:
      "Designed and implemented an optimized database schema for managing large-scale data with a focus on performance, scalability, and security.",
    tech: "SQL, PostgreSQL, MSSQL",
    image: "https://picsum.photos/seed/database/600/400",
    link: "https://github.com/Ayajahamad/database-design"
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div id="portfolio">
      <Container className="py-5">
        <h2 className="text-center section-title">Projects</h2>
        <Row className="g-4">
          {/* Left Side - Selected Project Details */}
          <Col md={6}>
            <Card className="project-card">
              <Card.Img
                variant="top"
                src={selectedProject.image}
                alt={selectedProject.title}
                className="project-image"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="project-title">{selectedProject.title}</Card.Title>
                <Card.Text className="project-description">{selectedProject.description}</Card.Text>
                <div className="mb-3">
                  {selectedProject.tech.split(",").map((tech, index) => (
                    <span key={index} className="project-tech-tag">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                <div className="d-grid">
                  <Button
                    className="project-btn"
                    href={selectedProject.link}
                    target="_blank"
                  >
                    View Project
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Side - Grid of Projects */}
          <Col md={6}>
            <Row xs={2} sm={2} className="g-3">
              {projects.map((project, idx) => (
                <Col key={idx}>
                  <Card
                    className={`project-grid-card ${
                      selectedProject.title === project.title
                        ? "border border-3 border-primary"
                        : ""
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.title}
                      className="project-grid-image"
                    />
                    <Card.Body>
                      <Card.Title className="project-grid-title">
                        {project.title.length > 30
                          ? project.title.substring(0, 27) + "..."
                          : project.title}
                      </Card.Title>
                      <Card.Text className="project-grid-tags">
                        {project.tech.split(",").map((tech, index) => (
                          <span key={index} className="project-tech-tag">
                            {tech.trim()}
                          </span>
                        ))}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
