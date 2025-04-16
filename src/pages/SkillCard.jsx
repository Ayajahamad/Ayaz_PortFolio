import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const SkillCard = ({ skill }) => {
  const [hover, setHover] = useState(false);

  const cardStyle = {
    transform: hover ? "scale(1.05)" : "scale(1)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <Card
      className="shadow-sm h-100 border-0"
      style={cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Card.Body className="d-flex flex-column align-items-center text-center">
        <div className="mb-3">{skill.icon}</div>
        <Card.Title className="fw-bold">{skill.name}</Card.Title>
        <Card.Text className="text-muted">
          {skill.level}% proficiency
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SkillCard;
