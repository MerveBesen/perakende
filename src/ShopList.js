import React, { Component } from "react";
import { ListGroup, ListGroupItem, Col, Container, Row } from "reactstrap";
import sList from "./sList";

const toplamTutar = 0;

export default class ShopList extends Component {
  render() {
    return (
      <div>
        <h3>ShopList</h3>
        <Container>
          <Row>
            <Col>
              Product
              
              <ListGroup>
                {sList.map((product) => (
                  <ListGroupItem key={product.id}>
                    {product.title}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col>
              Price
              
              <ListGroup>
                {sList.map((product) => (
                  <ListGroupItem key={product.id}>
                    {product.amount}
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
