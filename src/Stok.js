import "./App.css";

import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import React from "react";
import ProductList from "./ProductList";
import { getValue } from "@testing-library/user-event/dist/utils";

const Stok = () => {
  const newProduct={
    id:ProductList.length+1,
    title:null,
    amount:null
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            Ürün Adı: <input name="ad" placeholder="Ürün Adı" onChange={()=>newProduct.title=getValue.toString}></input>
          </Col>
          <Col>
            Fiyat: <input name="fiyat" placeholder="Fiyat" onChange={()=>newProduct.amount=getValue.toString}></input>
          </Col>

          <Col>
            <Button onClick={()=>{ProductList.push(newProduct);
              {console.log(ProductList);}}}>Ekle</Button>
            
          </Col>
        </Row>
        <ListGroup>
          <ListGroupItem>
            <Col>
              <Row>
                <Col>ÜRÜN ADI</Col>
                <Col>ÜRÜN FİYATI</Col>
                <Col></Col>
              </Row>
              {ProductList.map((product) => (
                <Row key={product.id}>
                  <Col xs="4">{product.title}</Col>
                  <Col xs="4">{product.amount}</Col>
                </Row>
              ))}
            </Col>
          </ListGroupItem>
        </ListGroup>
      </Container>
    </div>
  );
};

export default Stok;
