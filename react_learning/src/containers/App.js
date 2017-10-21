import React, { Component } from 'react';
import Comment from '../components/Comment';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavLink,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

import logo from '../images/logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
        <NavbarToggler className="float-sm-right" onClick={this.toggle} display="block"/>
          <NavbarBrand className="mr-2" href="/">reactstrap</NavbarBrand>
          
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="m1-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Welcome to React</h1>
                <p>
                  <Button
                    tag="a"
                    color="success"
                    size="large"
                    href="http://reactstrap.github.io"
                    target="_blank">
                    View Reactstrap Docs
                    </Button>
                </p>
                
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>

    );
  }
}

export default App;
