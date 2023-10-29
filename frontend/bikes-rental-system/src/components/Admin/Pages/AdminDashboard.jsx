import React from "react";
import { Card, Row, Container, Col } from "react-bootstrap";
import "./AdminDashboard.css";
import { PiWarningFill } from "react-icons/pi";
import { FcCalendar } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { MdOutlineUpdate } from "react-icons/md";

const AdminDashboard = () => {
  return (
    <Container fluid="sm, md, lg, xl, xxl">
      <h1 style={{ margin: "2rem", fontWeight: "800" }}>Dashboard</h1>
      <Row>
        <Col>
          <Card className="text-end card" bg="success" text="white">
            <Card.Body>
              <Card.Title>Available Bikes</Card.Title>
              <Card.Text style={{ fontWeight: "600", fontSize: "2rem" }}>
                3/7
              </Card.Text>
              <hr></hr>
              <Card.Text className="text-start">
                <span>
                  <PiWarningFill style={{ color: "red" }} />
                  <span className="cardFooter">0 bikes are malfunctioning</span>
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="text-end card" bg="primary" text="white">
            <Card.Body>
              <Card.Title>Revenue</Card.Title>
              <Card.Text style={{ fontWeight: "600", fontSize: "2rem" }}>
                $10.000
              </Card.Text>
              <hr></hr>
              <Card.Text className="text-start">
                <span>
                  <FcCalendar />
                  <span className="cardFooter">Last Month</span>
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="text-end card" bg="danger" text="white">
            <Card.Body>
              <Card.Title>Fixed Issues</Card.Title>
              <Card.Text style={{ fontWeight: "600", fontSize: "2rem" }}>
                72
              </Card.Text>
              <hr></hr>
              <Card.Text className="text-start">
                <span>
                  <BsGithub style={{ color: "black" }} />
                  <span className="cardFooter">Tracked from Github</span>
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="text-end mb-2 card" bg="info" text="white">
            <Card.Body>
              <Card.Title>Followers</Card.Title>
              <Card.Text style={{ fontWeight: "600", fontSize: "2rem" }}>
                +245
              </Card.Text>
              <hr></hr>
              <Card.Text className="text-start">
                <span>
                  <MdOutlineUpdate />
                  <span className="cardFooter">Just updated</span>
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
