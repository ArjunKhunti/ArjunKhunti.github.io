import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";

export default function Contact() {
  return (
    <Container
      style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}
    >
      <Card style={{ width: "60%", padding: "4%" }}>
        <Form>
          <Form.Group controlId="formName">
            <Form.Control type="text" placeholder="your name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Control type="email" placeholder="your email" />
          </Form.Group>
          <Form.Group controlId="formSuggestion">
            <Form.Control as="textarea" placeholder="suggstions" rows="3" />
          </Form.Group>
          <Form.Group>
            <Button variant="primary" type="submit" style={{ width: "100%" }}>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
}
