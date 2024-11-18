import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg"; // LinkedIn
import navIcon2 from "../assets/img/nav-icon4.svg"; // GitHub
import navIcon3 from "../assets/img/nav-icon3.svg"; // Instagram
import navIconEmail from "../assets/img/email-icon.svg"; // Email Icon
import navIconPhone from "../assets/img/phone-icon.svg"; // Phone Icon

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Logo Section */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>

          {/* Social and Contact Section */}
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
  <a href="https://www.linkedin.com/in/kevin-zhu-aa2213263" target="_blank" rel="noopener noreferrer">
    <img src={navIcon1} alt="LinkedIn Icon" />
  </a>
  <a href="https://github.com/zks10" target="_blank" rel="noopener noreferrer">
    <img src={navIcon2} alt="GitHub Icon" />
  </a>
  <a href="https://www.instagram.com/kevin._.zhu/" target="_blank" rel="noopener noreferrer">
    <img src={navIcon3} alt="Instagram Icon" />
  </a>
  <a href="mailto:kevinzhu2004101@gmail.com">
    <img src={navIconEmail} alt="Email Icon" />
  </a>
  <a href="tel:+16473233233">
    <img src={navIconPhone} alt="Phone Icon" />
  </a>
</div>

            <p>Waterloo, Ontario, Canada</p>
            <p>© 2024 Kevin Zhu. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
