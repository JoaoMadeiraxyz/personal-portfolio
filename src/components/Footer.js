import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-madeira" rel="noreferrer" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/joaomadeiraxyz/" rel="noreferrer" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
            <p>Portfolio Layout: <a href="https://www.youtube.com/@webdecoded" target="_blank">webdecoded</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}