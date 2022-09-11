import React from "react"
import { Container, Row, Col, Card} from "react-bootstrap"

const About = (props) => {
    return(
        <Container fluid className="about-section">
            <Container>
                <Row>
                    <Col
                md={7}
                style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
                }}>
            <Card>
                <Card.Body>
                    <p style={{ textAlighn: "justify-content" }}>
                        Hello everyone, welcome to my page! I am Andrew MacPherson from Grand Rapids, MI. <br />
                        I am just finishing up the coding bootcamp through Michigan State University which teaches you full stack webdevelopment. All in 6 months!!! <br />
                        <br/>
                        Aside from coding, I also enjoy quite a few other activities. Such as:
                    </p>
                    <ul>
                        <li className="about-activity">Tending to house and garden plants</li>
                        <li className="about-activity">Art and Photography</li>
                        <li className="about-activity">Baking/Cooking</li>
                    </ul>
                    <p>
                       Please feel free to explore my porfolio and other projects I have accompilished during the MSU Coding bootcamp! 
                    </p>
                </Card.Body>
            </Card> 
            </Col>
          </Row>
        </Container>
    </Container>
    )
}

export default About