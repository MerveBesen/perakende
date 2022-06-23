import "./App.css";
import { Button, Col, Container, Navbar, Row } from "reactstrap";
import Products from "./Products";
import ShopList from "./ShopList";
import React, { Component, useState } from "react";
import sList from "./sList";
import NavBar from "./NavBar";
import Stok from "./Stok";


const MainPage = () => {
  const [screen, setScreen] = useState(0);
  const toplamTutar=0;
  return (
    <>
      <div>
        <NavBar onClick={(state) => setScreen(state)} />
      </div>
      {screen === 0 ? (
        <div>
          <Row>
            <Col xs="4">
              {" "}
              ÜRÜNLER
              <Products />
            </Col>
            <Col xs="6">
              {" "}
              ALIŞ-VERİŞ LİSTESİ
              <ShopList />
            </Col>
          </Row>

          <footer>
            <Row>
              <Col>
                <Button>Kredi Kartı</Button>
              </Col>
              <Col>
                <Button>Nakit</Button>
              </Col>
              <Col>Tutar: {toplamTutar} TL</Col>
              <Col>
                <Button
                  className="a"
                  onClick={() => {
                    if ((sList.length = !0)) {
                      sList.pop();
                    }
                  }}
                >
                  Done
                </Button>
              </Col>
            </Row>
          </footer>
        </div>
      ) : screen === 1 ? (
        <Stok />
      ) : null}
    </>
  );
};

export default MainPage;
