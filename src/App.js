import "./App.css";
import { Col, Container, List, Row } from "reactstrap";
import Products from "./Products";
import ShopList from "./ShopList"
import React, { Component } from "react";


export default class App extends Component {
  render() {
    
    return (
      <div>
        <Container>
          <Row>
            <Col xs="5">
              <Products title="Product List" />
            </Col>
            <Col xs="7">
              <ShopList title="Shop List" />
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </div>
    );
  }
}
