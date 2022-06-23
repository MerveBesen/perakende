import "./App.css";
import { Button, Col, Container, Navbar, Row } from "reactstrap";

import React from "react";

const NavBar = ({onClick}) => {
  
  return (
    <div>
      <Row>
        <Col xs="1">
          <Navbar>
            <Button className="bar" onClick={()=>onClick(0)}>
              Ana Sayfa
            </Button>
          </Navbar>
        </Col>
        <Col xs="1">
          <Navbar>
            <Button className="bar" onClick={()=>onClick(1)}>
              Stok
            </Button>
          </Navbar>
        </Col>
        <Col xs="1">
          <Navbar>
            <Button className="bar" onClick={()=>onClick(2)}>
              Döküman
            </Button>
          </Navbar>
        </Col>
      </Row>
    </div>
  );
};

export default NavBar;
