import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.jpeg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-start">
            <img src={logo} alt="Logo" style={{ borderRadius: "50%", marginBottom: "30px", width: "100px", height: "100px" }} />
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abderrahman-el-qadiri-b7573124a/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/qad7098/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/qad7098/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
