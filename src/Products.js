import { Container, Row, Col, List } from "reactstrap";
import React, { Component } from "react";
import ProductList from "./ProductList";
import sList from "./sList";

export default class Products extends Component {
  
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <Container>
          <Col>
            {ProductList.map((product) => (
              <button key={product.id} onClick={sList.push(product.id, product.image, product.title, product.amount)}>
                
                <p>{product.image}</p>
                <p>{product.title}</p>
              </button>
            ))}
          </Col>
        </Container>
      </div>
    );
  }
}
