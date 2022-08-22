import { useState } from "react";
import {Navbar, Nav, Container} from "react-bootstrap"
import { Link } from "react-router-dom";

const Navigation = (props) => {
    return (
        <Container>
         <Navbar className="sticky navbar">
            <Nav.Item>
              <Nav.Link as={Link}
                to="/">Home </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about">
                 About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project">
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"> Resume
              </Nav.Link>
            </Nav.Item>

        </Navbar>
    </Container>
    )
  }
  
  export default Navigation