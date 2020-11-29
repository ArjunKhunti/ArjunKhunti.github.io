import React from "react";
import { Card, CardDeck, Row, Col } from "react-bootstrap";
import pythonLogo from "../assets/python.png";
import splunkLogo from "../assets/splunk.jpg";
import reactLogo from "../assets/react.png";
import flutterLogo from "../assets/flutter.png";

export default function Skills() {
  return (
    <CardDeck
      as={Row}
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "3%",
        padding: "5%",
        bgcolor: "#808080",
      }}
    >
      <Card as={Col} sm={3} className="shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Img variant="top" src={pythonLogo} style={{ padding: "10%" }} />
        <Card.Footer>
          <small className="text-muted" style={{ display: "flex" }}>
            Python
          </small>
          <div className="progress  mt-2">
            <div
              className="progress-bar progress-bar-striped"
              role="progressbar"
              style={{ width: "80%" }}
            >80%</div>
          </div>
        </Card.Footer>
      </Card>
      <Card as={Col} sm={3} className="shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Img variant="top" src={splunkLogo} style={{ padding: "10%" }} />
        <Card.Footer>
          <small className="text-muted" style={{ display: "flex" }}>
            Splunk
          </small>
          <div className="progress  mt-2">
            <div
              className="progress-bar progress-bar-striped"
              role="progressbar"
              style={{ width: "70%" }}
            >70%</div>
          </div>
        </Card.Footer>
      </Card>
      <Card as={Col} sm={3} className="shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Img variant="top" src={reactLogo} style={{ padding: "10%" }} />
        <Card.Footer>
          <small className="text-muted" style={{ display: "flex" }}>
            ReactJs
          </small>
          <div className="progress mt-2">
            <div
              className="progress-bar progress-bar-striped"
              role="progressbar"
              style={{ width: "30%" }}
            >30%</div>
          </div>
        </Card.Footer>
      </Card>
      <Card as={Col} sm={3} className="shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Img variant="top" src={flutterLogo} style={{ padding: "10%" }} />
        <Card.Footer>
          <small className="text-muted" style={{ display: "flex" }}>
            Flutter
          </small>
          <div className="progress  mt-2">
            <div
              className="progress-bar progress-bar-striped"
              role="progressbar"
              style={{ width: "50%" }}
            >50%</div>
          </div>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
}
