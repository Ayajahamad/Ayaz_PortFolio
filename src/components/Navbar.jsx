import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("#home");

  const handleScroll = () => {
    const sections = ["home", "about", "portfolio", "skills", "contact"];
    let currentSection = "#home";

    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = `#${section}`;
          break;
        }
      }
    }

    setActiveLink(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      variant="dark"
      expand="lg"
      sticky="top"
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand href="#home" className="animated-name">
          Ayaj Ahamad
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar" />
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto" activeKey={activeLink}>
            <Nav.Link href="#home" className={activeLink === "#home" ? "active-link" : ""}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === "#about" ? "active-link" : ""}>About Me</Nav.Link>
            <Nav.Link href="#portfolio" className={activeLink === "#portfolio" ? "active-link" : ""}>Projects</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "#skills" ? "active-link" : ""}>Skills</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === "#contact" ? "active-link" : ""}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
