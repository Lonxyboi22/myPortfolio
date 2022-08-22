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
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
                <li className="social-icons">
                    <a href="https://github.com/Lonxyboi22">
                        <img src={require('./images/github_image.png')}>
                        </img>
                    </a>
                </li>
                <li className="social-icons">
                    <a href="https://www.linkedin.com/in/andrew-macpherson-460665213/">
                        <img src={require('./images/linkedin.png')}>
                        </img>
                    </a>
                </li>
                <li className="social-icons">
                    <a href="https://www.instagram.com/lonxyboi22/">
                        <img src={require('./images/instagram.png')}>
                        </img>
                    </a>
                </li>
            </ul>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} ASM</h3>
          </Col>
        </Row>
    </Container>
    )
  }
  
  export default Footer