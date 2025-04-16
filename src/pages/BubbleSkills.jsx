import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
} from "react-bootstrap";
import { FaChartBar } from "react-icons/fa";
import "./BubbleSkills.css";

const skillsData = [
  { name: "Python", level: 90, category: "Back End" },
  { name: "JavaScript", level: 80, category: "Front End" },
  { name: "HTML", level: 85, category: "Front End" },
  { name: "CSS", level: 80, category: "Front End" },
  { name: "React", level: 75, category: "Front End" },
  { name: "SQL", level: 80, category: "Database" },
  { name: "PostgreSQL", level: 70, category: "Database" },
  { name: "MSSQL", level: 65, category: "Database" },
  { name: "Flask", level: 75, category: "Back End" },
  { name: "Excel", level: 80, category: "Professional" },
  { name: "PowerBI Basics", level: 60, category: "Professional" },
  { name: "FastAPI", level: 70, category: "Back End" },
  { name: "Django (API)", level: 80, category: "Back End" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "DBeaver", level: 85, category: "Tools" },
  { name: "PyCharm", level: 80, category: "Tools" },
  { name: "Postman", level: 85, category: "Tools" },
  { name: "Bootstrap", level: 80, category: "Front End" },
];

const categories = [
  { label: "All", value: "All" },
  { label: "Front End", value: "Front End" },
  { label: "Back End", value: "Back End" },
  { label: "Database", value: "Database" },
  { label: "Tools", value: "Tools" },
];

const getRandom = (min, max) => Math.random() * (max - min) + min;

const BubbleSkills = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills =
    activeFilter === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeFilter);

  return (
    <div className="bubble-skill-wrapper py-5">
      <Container id="skills">
        <Card className="bubble-skill-card p-4">
          <Row className="justify-content-center text-center mb-2">
            <Col md={8}>
              <h2 className="fw-bold mb-3 text-center section-title skill-section-title">
                My Skills
              </h2>
            </Col>
            <p className="text-center text-muted explore-bubble-skill mb-4">
              Explore my professional skill set across various domains.
            </p>
          </Row>

          <Row className="justify-content-center mb-4">
            <Col
              md="auto"
              className="d-flex flex-wrap justify-content-center gap-2"
            >
              {categories.map((cat, index) => (
                <Button
                  key={index}
                  onClick={() => setActiveFilter(cat.value)}
                  className={`category-bubble-button ${
                    activeFilter === cat.value ? "active" : ""
                  }`}
                >
                  {cat.label}
                </Button>
              ))}
            </Col>
          </Row>

          <div className="floating-bubble-container position-relative">
            {filteredSkills.map((skill, index) => {
              const left = getRandom(5, 85); // keep inside container boundaries
              const top = getRandom(0, 80);
              const animation = `float${Math.floor(getRandom(1, 5))}`;

              return (
                <div
                  key={index}
                  className={`floating-bubble ${animation}`}
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay: `${getRandom(0, 5)}s`,
                  }}
                >
                  <div className="bubble-content">
                    <strong>{skill.name}</strong>
                    <div className="proficiency">
                      <FaChartBar size={14} className="me-1" />
                      <span>{skill.level}%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default BubbleSkills;
