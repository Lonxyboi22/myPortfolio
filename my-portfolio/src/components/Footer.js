import { Container, Row, Col } from "react-bootstrap";

const Footer = (props) => {
    let date = new Date();
    let year = date.getFullYear();
    return (
    <Container fluid className="has-text-centered footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Designed and Developed by Andrew Macpherson</h3>          </Col>
          <Col md="4" className="footer-body">
            <div style={{ display: "flex", justifyContent: "center" }}>
            <ul className="footer-icons" style={{ listStyleType: "none", margin: 0, padding: 0, overflow: "hidden"}}>
                <li className="social-icons" style={{   float: "left" }}>
                    <a href="https://github.com/Lonxyboi22" style={{ display:"block", padding: 16 }}>
                        <img style={{ width: 100, height: 100 }} src={require('./images/github_image.png')}>
                        </img>
                    </a>
                </li>
                <li className="social-icons" style={{   float: "left" }}>
                    <a href="https://www.linkedin.com/in/andrew-macpherson-460665213/" style={{ display:"block", padding: 16 }}>
                        <img style={{ width: 100, height: 100 }} src={require('./images/linkedin.png')}>
                        </img>
                    </a>
                </li>
                <li className="social-icons" style={{   float: "left" }}>
                    <a href="https://www.instagram.com/lonxyboi22/" style={{ display:"block", padding: 16 }}>
                        <img style={{ width: 100, height: 100 }} src={require('./images/instagram.png')}>
                        </img>
                    </a>
                </li>
            </ul>
            </div>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} ASM</h3>
          </Col>
        </Row>
    </Container>
    )
  }
  
  export default Footer