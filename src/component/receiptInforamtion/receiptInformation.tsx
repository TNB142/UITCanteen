import React from "react";
import { Row, Col, Nav, NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import "./style.css";

export function ReceiptInformation(props: any) {
  const navigate = useNavigate();

  const clickDetails = useCallback(() => {
    console.log("Pay details");
    navigate("/Details");
  }, [navigate]);
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
              #12345678
            </p>
            <p>14/11/2022 09:32</p>
            <p className="text-success">Đã thanh toán</p>
            <p>Ví Momo</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
