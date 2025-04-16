// Home.jsx
import { Container, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import bg_video from "../assets/bg_video/bg_video.mp4";
import "./Home.css";

const Home = () => {
  return (
    <div id="home" className="home-container">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={bg_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Halo Glow Ring */}
      <div className="glow-ring"></div>

      {/* Gradient Overlay */}
      <div className="gradient-overlay"></div>

      {/* Main Content */}
      <Container className="d-flex align-items-center justify-content-center home-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Card className="glass-card">
            <motion.h1
              className="fw-bold mb-3 neon-text"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              Ayaj Ahamad
            </motion.h1>

            <motion.h5
              className="mb-3 fw-light soft-text"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              Software Developer | Python | SQL | API Integration
            </motion.h5>

            <p className="desc-text">
              Building high-performance backend solutions and seamless APIs. Passionate about databases and automation.
            </p>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4"
            >
              <Button variant="info" size="lg" href="#portfolio" className="fw-bold">
                🚀 View My Projects
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </Container>

      {/* Scroll Arrow */}
      <div className="scroll-arrow">
        <FaArrowDown />
      </div>
    </div>
  );
};

export default Home;
