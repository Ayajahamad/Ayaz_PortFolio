import { Container } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file for animations and effects

const Footer = () => {
  return (
    <footer className="text-light py-4 footer-bg">
      <Container className="text-center">
        {/* Social Icons */}
        <div className="mb-3">
          <a href="https://www.linkedin.com/in/ayaj-ahamad-732153229/" target="_blank" rel="noopener noreferrer" className="footer-icon linkedin">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/Ayajahamad" target="_blank" rel="noopener noreferrer" className="footer-icon github">
            <FaGithub size={30} />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="footer-icon twitter">
            <FaTwitter size={30} />
          </a>
        </div>

        {/* Copyright & Contact */}
        <p className="mb-1 footer-text">© 2025 Ayaj Ahamad. All Rights Reserved.</p>
        <p>
          <a href="#contact" className="footer-contact">
            Get in Touch
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
