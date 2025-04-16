import { Container, Card, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const posts = [
  {
    title: "Understanding Python Basics",
    snippet: "Learn the fundamentals of Python programming and enhance your skills.",
    slug: "understanding-python-basics"
  },
  {
    title: "SQL for Data Analysis",
    snippet: "Explore how SQL can be used for analyzing and extracting meaningful insights from data.",
    slug: "sql-for-data-analysis"
  },
  {
    title: "Building APIs with FastAPI and Flask",
    snippet: "A complete guide to designing and building efficient REST APIs using FastAPI and Flask.",
    slug: "building-apis-fastapi-flask"
  },
  {
    title: "JavaScript Tips & Tricks",
    snippet: "Enhance your JavaScript skills with these useful tips and best practices.",
    slug: "javascript-tips-tricks"
  }
];

// Base URL for blog posts
const BASE_URL = "https://myportfolio.com/blog/";

const Blog = () => {
  return (
    <Container id="blog" className="py-5">
      <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>Latest Blog Posts</h2>
      <Row className="g-4">
        {posts.map((post, idx) => (
          <Col md={6} lg={4} key={idx}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title className="fw-bold">{post.title}</Card.Title>
                <Card.Text>{post.snippet}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-0 text-end">
                <Button 
                  variant="primary" 
                  href={`${BASE_URL}${post.slug}`} 
                  target="_blank"
                >
                  Read More
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
