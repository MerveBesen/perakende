import React, { Component } from "react";
import { ListGroup, ListGroupItem ,Col, Container, Row} from "reactstrap";

import çay from "./pictures/çay.jpg";
import peynir from "./pictures/peynir.jpg";
import reçel from "./pictures/reçel.jpg";
import simit from "./pictures/simit.jpg";
import su from "./pictures/su.jpg";
import zeytin from "./pictures/zeytin.jpg";
import yumurta from "./pictures/egg.jpeg";
import ekmek from "./pictures/ekmek.jpeg";
import poğaça from "./pictures/poğaça.jpeg";
import bal from "./pictures/bal.jpg";
import kaşar from "./pictures/kaşar.jpg";
import pekmez from "./pictures/pekmez.jpg";
import salam from "./pictures/salam.jpg";
import sos from "./pictures/sos.jpg";
import süt from "./pictures/süt.jpg";

const toplamTutar=0;

export default class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        { id: 1, image: çay, title: "Çay", amount: 3.5 },
        { id: 2, image: peynir, title: "Peynir", amount: 3.5 },
        { id: 3, image: reçel, title: "Reçel", amount: 3.5 },
        { id: 4, image: simit, title: "Simit", amount: 3.5 },
        { id: 5, image: su, title: "Su", amount: 3.5 },
        { id: 6, image: zeytin, title: "Zeytin", amount: 3.5 },
        { id: 7, image: yumurta, title: "Yumurta", amount: 3.5 },
        { id: 8, image: ekmek, title: "Ekmek", amount: 3.5 },
        { id: 9, image: poğaça, title: "Poğaça", amount: 3.5 },
        { id: 10, image: bal, title: "Bal", amount: 3.5 },
        { id: 11, image: kaşar, title: "Kaşar", amount: 3.5 },
        { id: 12, image: pekmez, title: "Pekmez", amount: 3.5 },
        { id: 13, image: salam, title: "Salam", amount: 3.5 },
        { id: 14, image: sos, title: "Sos", amount: 3.5 },
        { id: 15, image: süt, title: "Süt", amount: 3.5 },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>ShopList</h1>
        <Container>
            <Row>
                <Col> Product
        <ListGroup>
          {this.state.productList.map((product) => (
            <ListGroupItem key={product.id}>
              {product.title}
            </ListGroupItem>
          ))}
        </ListGroup>
        </Col>
        <Col> Price
        <ListGroup>
          {this.state.productList.map((product) => (
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
