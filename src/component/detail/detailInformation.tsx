import React from "react";
import { Col, Row, Stack } from "react-bootstrap";
import "./style.css";
import { DetailImage } from "./detailImage/detailImage";
import { useShoppingCart } from "../../context/shoppingCartContext";

export function DetailInformation() {
  const { cartItems } = useShoppingCart();
  return (
    <div className="DetailContainer">
      <Row>
        <Col
          sm={8}
          className="d-flex flex-column align-items-center justify-content-between"
        >
          <div className="infoText">
            <Row>
              <div className="textHeading">Thông tin</div>
              <Col className="textTitle">
                <p>Mã đơn hàng:</p>
                <p>Đặt ngày:</p>
                <p>Đã thanh toán:</p>
                <p>Trả tiền bởi:</p>
              </Col>
              <Col className="textDetails">
                <p>#12345678</p>
                <p>14/11/2022 09:32</p>
                <p>14/11/2022 09:35</p>
                <p>Ví Momo</p>
              </Col>
            </Row>
          </div>
          <div className="infoCurrency">
            <Row>
              <Col className="textTitle">
                <p>Thành tiền:</p>
                <p>Tổng cộng:</p>
              </Col>
              <Col className="textDetails">
                <p>25.000 vnd</p>
                <p>25.000 vnd</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm={4} className="infoImg">
          {cartItems.map((item) => (
            <DetailImage key={item.id} {...item} />
          ))}
        </Col>
      </Row>
    </div>
  );
}
