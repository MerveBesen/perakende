import React, { Component } from "react";
import { ListGroup, ListGroupItem, Col, Container, Row } from "reactstrap";
import sList from "./sList";
import "./App.css";

const toplamTutar = 0;

export default class ShopList extends Component {
  render() {
    return (
      <div>
        <h3>ShopList</h3>
        <Container>
          <Row>
            <Col>
              <h4>Products</h4>
              <ListGroup flush>
                {sList.map((product) => (
                  <ListGroupItem key={product.id}>
                    <Row>
                      <Col>{product.title}</Col>
                      <Col>{product.amount}</Col>
                    </Row>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>

        <footer>
          <h4>Tutar: {toplamTutar} TL</h4>
        </footer>
      </div>
    );
  }
}
