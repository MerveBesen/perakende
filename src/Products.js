import { Container, Row, Col, List } from "reactstrap";
import React, { Component, useEffect, useState } from "react";
import ProductList from "./ProductList";
import sList from "./sList";
import "./App.css";
import ReactDOM from "react-dom/client";

function ListAddItem() {
  const [product, setProduct] = useState();
  useEffect(() => {
    setProduct(() =>
      sList.push({
        id: product.id,
        image: product.image,
        title: product.title,
        amount: product.amount,
      })
    );
  });
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListAddItem />);

export default class Products extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <Container>
          <Col>
            {ProductList.map((product) => (
              <button
                key={product.id}
                onClick={() => {
                  ListAddItem(product);
                }}
              >
                {console.log(sList)}

                <img src={product.image} />
                <p>{product.title}</p>
              </button>
            ))}
          </Col>
        </Container>
      </div>
    );
  }
}
