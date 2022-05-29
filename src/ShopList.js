import React, { Component } from "react";
import { ListGroup, ListGroupItem ,Col, Container, Row} from "reactstrap";
import productList from "./App"

const toplamTutar=0;

export default class ShopList extends Component {
  
  render() {
    return (
      <div>
        <h1>ShopList</h1>
        <Container>
            <Row>
                <Col> Product
        <ListGroup>
          {productList.map((product) => (
            <ListGroupItem key={product.id}>
              {product.title}
            </ListGroupItem>
          ))}
        </ListGroup>
        </Col>
        <Col> Price
        <ListGroup>
          {productList.map((product) => (
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
