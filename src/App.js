import "./App.css";
import { Col, Container, Row } from "reactstrap";
import Products from "./Products";
import ShopList from "./ShopList";
import React, {Component} from "react";

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

       

export default class App extends Component {

  productList = [
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
  ]

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render(){
    return (
      <div>
        <Container>
          <Row>
            <Col xs="5">
              <Products title="Product List" />
            </Col>
            <Col xs="7">
              <ShopList title="Shop List" />
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </div>
    );
  }
}


/*
import çay from "./pictures/çay.jpg";
import peynir from "./pictures/peynir.jpg";
import reçel from "./pictures/reçel.jpg";
import simit from "./pictures/simit.jpg";
import su from "./pictures/su.jpg";
import zeytin from "./pictures/zeytin.jpg";
import yumurta from "./pictures/egg.jpeg";
import ekmek from  "./pictures/ekmek.jpeg";
import poğaça from "./pictures/poğaça.jpeg";
import bal from "./pictures/bal.jpg"
import kaşar from "./pictures/kaşar.jpg"
import pekmez from "./pictures/pekmez.jpg"
import salam from "./pictures/salam.jpg"
import sos from "./pictures/sos.jpg"
import süt from "./pictures/süt.jpg"

const DUMMY_PRODUCT_DATAS = [
  {
    id: "1",
    imageRef: çay,
    title: "Çay",
    amount: 3.50,
  },
  {
    id: "2",
    imageRef: peynir,
    title: "Peynir",
    amount: 3.50,
  },
  {
    id: "3",
    imageRef: reçel,
    title: "Reçel",
    amount: 3.50,
  },
  {
    id: "4",
    imageRef: simit,
    title: "Simit",
    amount: 3.50,
  },
  {
    id: "5",
    imageRef: su,
    title: "Su",
    amount: 3.50,
  },
  {
    id: "6",
    imageRef: zeytin,
    title: "Zeytin",
    amount: 3.50,
  },
  {
    id: "7",
    imageRef: yumurta,
    title: "Yumurta",
    amount: 3.50,
  },
  {
    id: "8",
    imageRef: ekmek,
    title: "Ekmek",
    amount: 3.50,
  },
  {
    id: "9",
    imageRef: poğaça,
    title: "Poğaça",
    amount: 3.50,
  },
  {
    id: "10",
    imageRef: bal,
    title: "Bal",
    amount: 3.50,
  },
  {
    id: "11",
    imageRef: kaşar,
    title: "Kaşar",
    amount: 3.50,
  },
  {
    id: "12",
    imageRef: pekmez,
    title: "Pekmez",
    amount: 3.50,
  },
  {
    id: "13",
    imageRef: salam,
    title: "Salam",
    amount: 3.50,
  },
  {
    id: "14",
    imageRef: sos,
    title: "Kahvaltılık Sos",
    amount: 3.50,
  },
  {
    id: "15",
    imageRef: süt,
    title: "Süt",
    amount: 3.50,
  }
]

const App = () => {
  return (
    <div itemDatas={DUMMY_PRODUCT_DATAS}>
  
    </div>
  )

}

-------------------
function App() {
  return (
    <div className="App">
      <header></header>
      <body>
        <table width="100%">
          <td width="30%">
            <table width="100%">
              <tr width="100%">
                <button>
                  <img src={yumurta}></img>
                  <p>Yumurta </p>
                </button>
                <button>
                  <img src={ekmek}></img>
                  <p>Ekmek</p>
                </button>
                <button>
                  <img src={çay}></img>
                  <p>Çay </p>
                </button>
              </tr>
              <tr>
                <button>
                  <img src={peynir}></img>
                  <p>Peynir </p>
                </button>
                <button>
                  <img src={poğaça}></img>
                  <p>Poğaça</p>
                </button>
                <button>
                  <img src={reçel}></img>
                  <p>Reçel </p>
                </button>
              </tr>
              <tr>
                <button>
                  <img src={simit}></img>
                  <p>Simit </p>
                </button>
                <button>
                  <img src={su}></img>
                  <p>Su</p>
                </button>
                <button>
                  <img src={zeytin}></img>
                  <p>Zeytin </p>
                </button>
              </tr>
              <tr>
                <button>
                  <img src={bal}></img>
                  <p>Bal </p>
                </button>
                <button>
                  <img src={süt}></img>
                  <p>Süt</p>
                </button>
                <button>
                  <img src={pekmez}></img>
                  <p>Pekmez </p>
                </button>
              </tr>
              <tr>
                <button>
                  <img src={salam}></img>
                  <p>Salam </p>
                </button>
                <button>
                  <img src={kaşar}></img>
                  <p>Kaşar</p>
                </button>
                <button>
                  <img src={sos}></img>
                  <p>Kahvaltılık Sos </p>
                </button>
              </tr>
            </table>
          </td>
          <td width="20%">
            <table width='100%'>
              <tr width='100%'>
                <table width='100%'>
                  <tr>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                  </tr>
                  <tr>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                  </tr>
                  <tr>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                  </tr>
                </table>
              </tr>
              <tr>

              </tr>
            </table>
          </td>
          <td width="50%">
            <table></table>
          </td>
        </table>
      </body>
    </div>
  );
}
*/

