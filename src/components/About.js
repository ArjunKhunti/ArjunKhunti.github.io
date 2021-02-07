import React from "react";
import { Jumbotron, Button, Row, Col, Image } from "react-bootstrap";
import MyPic from "../assets/mypic.jpg";

export default function About() {
  return (
    <div>
      <Jumbotron>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col sm={4} md={4}>
            <Image src={MyPic} width="300" height="300" rounded />
          </Col>
          <Col sm={7} md={7}>
            <h1 style={{ marginTop: "2%" }}>Hello!!</h1>
            <p style={{ fontSize: "20px", marginTop: "3%" }}>
              My name is Arjun. I am a software engineer and a graphics
              designer. I enjoy listening to songs and teaching kids.
              Additionally, I like to deep dive in technology and new inventions
              in my free time.
            </p>
            <p>
              <Button
                variant="primary"
                href="https://github.com/ArjunKhunti/arjunkhunti.github.io/blob/master/src/docs/Resume.pdf"
                download="Arjun's Resume.pdf"
              >
                Download Resume
              </Button>
            </p>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}
