import { Container, Card} from "react-bootstrap"


const Home = (props) => {
    return(
    <Container fluid className="home-section">
            <Container style={{ display:"flex" }}>
            <Card className="home-card1">
                <Card.Body className="card-body">
                    <h1>
                        Code!! <br />
                    </h1>
                    <p>
                        Front-end Developer, <br/>
                        focusing on clean and <br/>
                        efficient code. I use <br/>
                        HTML5, CSS, Javascript <br/>
                        and react!
                    </p>
                </Card.Body>
            </Card>
            <Card className="home-card2">
                <Card.Body>
                    <a>
                        <img style={{ width: 600, height: 270 }} src={require('../images/binaryCode.jpg')}></img>
                    </a>
                </Card.Body>
            </Card>
        </Container>
    </Container>
    )
}

export default Home