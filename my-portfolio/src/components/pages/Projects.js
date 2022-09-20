import { Container, Card} from "react-bootstrap"


const Projects = (props) => {
    return(
    <Container fluid className="project-section">
        <Container className= "project-container">
            <Card className="project-card1">
                <Card.Body className="card-body">
                    <a href="https://purrfect-pet-shop.herokuapp.com/">
                        <img style={{ width: 600, height: 270 }} src={require('../images/purrfect_pets.jpg')}></img>
                    </a>
                </Card.Body>
            </Card>
            <Card className="project-card2">
                <Card.Body>
                    <a href="https://www.instagram.com/lonxyboi22/">
                        <img style={{ width: 600, height: 270 }} src={require('../images/javaScriptbg.png')}></img>
                    </a>
                </Card.Body>
            </Card>
            <Card className="project-card3">
                <Card.Body>
                    <a href="https://www.instagram.com/lonxyboi22/">
                        <img style={{ width: 600, height: 270 }} src={require('../images/binaryCode.jpg')}></img>
                    </a>
                </Card.Body>
            </Card>
            <Card className="project-card4">
                <Card.Body>
                    <a href="https://www.instagram.com/lonxyboi22/">
                        <img style={{ width: 600, height: 270 }} src={require('../images/javaScriptbg.png')}></img>
                    </a>
                </Card.Body>
            </Card>
        </Container>
    </Container>
    )
}

export default Projects