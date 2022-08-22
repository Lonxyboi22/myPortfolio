import { Container, Row, Col } from "react-bootstrap";

const Footer = (props) => {
    let date = new Date();
    let year = date.getFullYear();
    return (
    <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Designed and Developed by Andrew Macpherson</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} AM</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
                <li className="social-icons">
                    <a href="https://github.com/Lonxyboi22">
                        <img src="./components/images/github_image.png"></img>
                    </a>
                </li>
            </ul>
          </Col>

        </Row>
    </Container>
    )
  }
  
  export default Footer