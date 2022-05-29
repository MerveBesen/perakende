import { Container, Row , Col} from "reactstrap";
import React, { Component } from "react";

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

export default class Products extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <Container>
          <Col xs="30">
            <button>
              <img src={çay}></img>
              <h4>Çay</h4>
            </button>
            <button>
              <img src={peynir}></img>
              <h4>Peynir</h4>
            </button>
            <button>
              <img src={reçel}></img>
              <h4>Reçel</h4>
            </button>
          </Col>
          <Col xs="30">
          <button>
              <img src={simit}></img>
              <h4>Simit</h4>
            </button>
            <button>
              <img src={su}></img>
              <h4>Su</h4>
            </button>
            <button>
              <img src={zeytin}></img>
              <h4>Zeytin</h4>
            </button>
          </Col>
          <Col xs="30">
          <button>
              <img src={yumurta}></img>
              <h4>Yumurta</h4>
            </button>
            <button>
              <img src={ekmek}></img>
              <h4>Ekmek</h4>
            </button>
            <button>
              <img src={poğaça}></img>
              <h4>Poğaça</h4>
            </button>
          </Col>
          <Col xs="30">
          <button>
              <img src={bal}></img>
              <h4>Bal</h4>
            </button>
            <button>
              <img src={kaşar}></img>
              <h4>Kaşar</h4>
            </button>
            <button>
              <img src={pekmez}></img>
              <h4>Pekmez</h4>
            </button>
          </Col>
          <Col xs="30">
          <button>
              <img src={salam}></img>
              <h4>Salam</h4>
            </button>
            <button>
              <img src={sos}></img>
              <h4>Sos</h4>
            </button>
            <button>
              <img src={süt}></img>
              <h4>Süt</h4>
            </button>
          </Col>
        </Container>
      </div>
    );
  }
}
