import React from "react"
import { Container, Row, Col, Card} from "react-bootstrap"

const About = (props) => {
    return(
        <Container fluid className="about-section">
            <Container md={7}
                style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
                }}>
            <Card className="about-card">
                <Card.Body className="about-card1">
                    <a href="">
                        <img style={{ width: 250, height: 300 }} src={require('../images/me.JPG')}></img>
                    </a>
                </Card.Body>
                <Card.Body className="about-card2">
                    <p>
                        Hello everyone, welcome to my page! I am Andrew MacPherson from Grand Rapids, MI. <br />
                        I am just finishing up the coding bootcamp through Michigan State University which teaches you full stack webdevelopment. <br /> 
                        This is all done in a matter of 6 months! <br />
                        <br/>
                        Aside from coding, I also enjoy quite a few other activities. Such as:
                    </p>
                    <ul>
                        <li className="about-activity">Tending to house and garden plants</li>
                        <li className="about-activity">Art and Photography</li>
                        <li className="about-activity">Baking/Cooking</li>
                    </ul>
                    <p>
                       Please feel free to explore my porfolio/github and other projects I have accompilished during the MSU Coding bootcamp! 
                    </p>
                </Card.Body>
            </Card>
        </Container>
    </Container>
    )
}

export default About