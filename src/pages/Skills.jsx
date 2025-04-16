import { useState } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import { 
  FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaServer, FaTable, FaChartBar,
  FaCode, FaClipboard, FaCogs, FaFlask, FaBold
} from 'react-icons/fa';
import SkillCard from '../pages/SkillCard';

const skillsData = [
  { name: "Python", level: 90, category: "Back End", icon: <FaPython className="text-primary" size={40} /> },
  { name: "JavaScript", level: 80, category: "Front End", icon: <FaJs className="text-warning" size={40} /> },
  { name: "HTML", level: 85, category: "Front End", icon: <FaHtml5 className="text-danger" size={40} /> },
  { name: "CSS", level: 80, category: "Front End", icon: <FaCss3Alt className="text-info" size={40} /> },
  { name: "React", level: 75, category: "Front End", icon: <FaReact className="text-primary" size={40} /> },
  { name: "SQL", level: 80, category: "Database", icon: <FaDatabase className="text-secondary" size={40} /> },
  { name: "PostgreSQL", level: 70, category: "Database", icon: <FaTable className="text-muted" size={40} /> },
  { name: "MSSQL", level: 65, category: "Database", icon: <FaServer className="text-danger" size={40} /> },
  { name: "Flask", level: 75, category: "Back End", icon: <FaPython className="text-warning" size={40} /> },
  { name: "Excel", level: 80, category: "Professional", icon: <FaChartBar className="text-success" size={40} /> },
  { name: "PowerBI Basics", level: 60, category: "Professional", icon: <FaChartBar className="text-info" size={40} /> },
  { name: "FastAPI", level: 70, category: "Back End", icon: <FaPython className="text-primary" size={40} /> },
  { name: "Django (API)", level: 80, category: "Back End", icon: <FaPython className="text-success" size={40} /> },
  { name: "VS Code", level: 90, category: "Tools", icon: <FaCode className="text-info" size={40} /> },
  { name: "DBeaver", level: 85, category: "Tools", icon: <FaClipboard className="text-primary" size={40} /> },
  { name: "PyCharm", level: 80, category: "Tools", icon: <FaCogs className="text-warning" size={40} /> },
  { name: "Postman", level: 85, category: "Tools", icon: <FaFlask className="text-danger" size={40} /> },
  { name: "Bootstrap", level: 80, category: "Front End", icon: <FaBold className="text-purple-500" size={40} /> }
];

const filterCategories = [
  { label: "All", value: "All" },
  { label: "Front End", value: "Front End" },
  { label: "Back End", value: "Back End" },
  { label: "Database", value: "Database" },
  // { label: "Professional", value: "Professional" },
  { label: "Tools", value: "Tools" },
];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills = activeFilter === "All"
    ? skillsData
    : skillsData.filter(skill => skill.category === activeFilter);

  return (
    <Container id="skills" className="py-5">
      <h2 className="text-center fw-bold mb-4">My Skills</h2>
      <p className="text-center text-muted mb-4">
        Explore my professional skill set across various domains.
      </p>

      {/* Filter Buttons */}
      <Row className="justify-content-center mb-4">
        <Col xs="auto">
          <ButtonGroup>
            {filterCategories.map((filter, idx) => (
              <Button
              key={idx}
                // variant={activeFilter === filter.value ? "primary" : "outline-primary"}
                
              onClick={() => setActiveFilter(filter.value)}
              style={
                activeFilter === filter.value
                  ? { background: "linear-gradient(90deg, #1e3c72, #2a5298)", borderColor: "rgba(3, 64, 177, 0.9)", color: "#fff" }
                  : { backgroundColor: "rgba(188, 207, 241, 0.9)", borderColor: "rgba(3, 34, 92, 0.9)", color: "#000"}
              }
            >
              {filter.label}
            </Button>
            
            ))}
          </ButtonGroup>
        </Col>
      </Row>

      <Row>
        {filteredSkills.map((skill, idx) => (
          <Col key={idx} xs={12} sm={6} md={activeFilter=='All' ? 3 : 4} className="mb-4">
            <SkillCard 
              skill={skill}
              cardStyle={{
                maxWidth: "800px",
                border: "none",
                borderRadius: "15px",
                background: "rgba(62, 102, 177, 0.9)",
                color: "#fff"
              }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
