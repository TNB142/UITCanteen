import React from "react";
import { Row, Col, Nav, NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

export function ReceiptInformation() {
  const navigate = useNavigate();

  const clickDetails = useCallback(() => {
    console.log("Pay details");
    navigate("/Details");
  }, [navigate]);
  const getPayInfo = JSON.parse(window.localStorage.getItem("PayInfo") || "{}");
  console.log("Receipt payinfo",getPayInfo)

  const getPayMethod = () => {
    if (getPayInfo.payMethod === "1") return "Ví Momo";
    if (getPayInfo.payMethod === "2") return "Online Banking";
  };

  const [payId, setPayId] = useState("orderId");
  useEffect(() => {
    async function getPayInfo() {
      const getPayId = await axios.get(
        "https://uitcanteen-backend.herokuapp.com/recentorder"
      );
      // window.location.reload()
      setPayId(getPayId.data.orderId)
      console.log("check payId",payId)
    }
    getPayInfo();
  }, ["https://uitcanteen-backend.herokuapp.com/recentorder",payId,setPayId]);



  // const getPayId = useCallback(() => {
  //   console.log("check payId in reciept:", getPayinfo);
  //   return getPayinfo;
  //   window.location.reload();
  // }, [navigate, getPayinfo]);

  // console.log("check in receipt information", getPayId());

  return (
    <div className="receipt_container">
      <h4 className="heading_receipt">Thông tin đơn hàng</h4>
      <div className="information_container">
        <Row>
          <Col className="payInformation_title d-flex flex-column justify-content-between">
            <p>Mã đơn hàng:</p>
            <p>Đặt ngày:</p>
            <p>Trạng thái đơn hàng:</p>
            <p>Trả tiền bởi:</p>
          </Col>
          <Col className=" payInformation_item d-flex flex-column justify-content-between">
            {/* <p>{props.PayID}</p>
        <p>{props.PayTime}</p>
        <p className="text-success">{props.PayStatus}</p>
        <p>{props.PayMethod}</p> */}
            <p className="text-primary" onClick={clickDetails}>
              {payId}
            </p>
            <p>{getPayInfo.payTime}</p>
            <p className="text-success">{getPayInfo.statePayCart}</p>
            <p>{getPayMethod()}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
