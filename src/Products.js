import { Container, Row, Col, List } from "reactstrap";
import React, { useState } from "react";
import ProductList from "./ProductList";
import sList from "./sList";
import "./App.css";

const Products = () => {

  return (
    <div>
      <Col>
        {ProductList.map((product) => (
          <button
            className="prod"
            key={product.id}
            onClick={() => {
              sList.push({
                id: product.id,
                image: product.image,
                title: product.title,
                amount: product.amount,
              });

              {
                console.log(sList);
              }
            }}
          >
            <img src={product.image} />
            <p>{product.title}</p>
          </button>
        ))}
      </Col>
    </div>
  );
};
export default Products;
