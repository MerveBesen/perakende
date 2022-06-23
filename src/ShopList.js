import React, { Component, useState } from "react";
import { ListGroup, ListGroupItem, Col, Row } from "reactstrap";
import sList from "./sList";
import "./App.css";

const ShopList = () => {


  return (
    
    <div>
      <Row>
        <Col>
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
    </div>
  );
};

export default ShopList;
