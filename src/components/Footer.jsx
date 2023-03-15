import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import logo from "../../src/assets/img/logo.png";
import github1 from '../assets/img/github1.svg'
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/feed/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Valentina9911"><img src={github1} alt="" /></a>
            </div>
            <p>Copyright 2023. Valentina Godoy</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
