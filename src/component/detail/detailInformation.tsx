import React from "react";
import { Col, Row, Stack } from "react-bootstrap";
import "./style.css";
import { DetailImage } from "./detailImage/detailImage";
import { useShoppingCart } from "../../context/shoppingCartContext";
import { useEffect, useState } from "react";
import axios from "axios";

export function DetailInformation() {
  const { cartItems } = useShoppingCart();
  const getPayInfo = JSON.parse(window.localStorage.getItem("PayInfo") || "{}");
  console.log("check getPayInfo in detailInfo",getPayInfo)
  const getPayMethod = () => {
    if (getPayInfo.payMethod === "1") return "Ví Momo";
    if (getPayInfo.payMethod === "2") return "Online Banking";
  };
  const getDishTime = () => {
    if (getPayInfo.pickupTime === "1") return "9:30-10:30";
    if (getPayInfo.pickupTime === "2") return "10:30-11:30";
    if (getPayInfo.pickupTime === "3") return "11:30-12:30";
  }
  const [payId, setPayId] = useState("orderId");
  useEffect(() => {
    async function getPayInfo() {
      const getPayId = await axios.get(
        "https://uitcanteen-backend.herokuapp.com/recentorder"
      );
      // window.location.reload()
      setPayId(getPayId.data.orderId);
      console.log("check payId", payId);
    }
    getPayInfo();
  }, ["https://uitcanteen-backend.herokuapp.com/recentorder",getPayInfo]);
  // console.log()
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
                <p>Giờ nhận món:</p>
                <p>Đã thanh toán:</p>
                <p>Trả tiền bởi:</p>
              </Col>
              <Col className="textDetails">
                <p>{payId}</p>
                <p>{getDishTime()}</p>
                <p>{getPayInfo.payTime}</p>
                <p>{getPayMethod()}</p>
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
                <p>{getPayInfo.cost}</p>
                <p>{getPayInfo.cost}</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm={4} className="infoImg">
          {JSON.parse(getPayInfo.items).map((item:any) => (
            <DetailImage key={item.id} {...item} />
          ))}
        </Col>
      </Row>
    </div>
  );
}
