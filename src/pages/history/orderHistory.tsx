import {
  Col,
  Container,
  Row,
  Button,
  Stack,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";
import { OrderHistoryTable } from "../../component/history/orderHistoryTable";
import { OrderHistoryTableCancel } from "../../component/history/orderHistoryTableCancel";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./style.css";

export function History() {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Đơn hàng đã đặt", value: "1" },
    { name: "Đơn hàng đã huỷ", value: "2" },
  ];
  const [orderHistoryPaidCompleted, setOrderHistoryPaidCompleted] = useState([]);
  const [orderHistoryPaidCancel, setOrderHistoryPaidCancel] = useState([]);

  const getUserPack: any = window.localStorage.getItem("userData");
  const userData = JSON.parse(getUserPack);
  useEffect(() => {
    async function getDish() {
      const responseOrderHistoryPaid = await axios.get(
        "https://uitcanteen-backend.herokuapp.com/completed"
      );
      setOrderHistoryPaidCompleted(responseOrderHistoryPaid.data.completedOrders);
      const completedPay = responseOrderHistoryPaid.data.completedOrders;
      const storedCompletedPay = JSON.stringify(completedPay);
      window.localStorage.setItem("completedPay", storedCompletedPay);
      
      const responseOrderHistoryCancelPaid = await axios.get(
        "https://uitcanteen-backend.herokuapp.com/cancelled"
      );
      setOrderHistoryPaidCancel(
        responseOrderHistoryCancelPaid.data.cancelledOrders
      );
      const cancelPay = responseOrderHistoryCancelPaid.data.cancelledOrders;
      const storedCancelPay = JSON.stringify(cancelPay);
      window.localStorage.setItem("cancelPay", storedCancelPay);
      console.log("đơn huỷ:",storedCancelPay)
    }
    getDish();
  }, [
    "https://uitcanteen-backend.herokuapp.com/completed",
    "https://uitcanteen-backend.herokuapp.com/cancelled",
  ]);
  return (
    <>
      <Container
        // className="bg-light"
        style={{
          height: "100%",
        }}
        id="history"
      >
        <div className="hello_text d-flex flex-row">
          Xin chào, <div className="username_text">{userData.firstName}</div>
        </div>
        <div className="header_orderHistory">Lịch sử đặt hàng</div>
        <Row>
          <Col>
            <ButtonGroup className="d-flex flex-column">
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={"outline-danger buttonSelect"}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                  className="buttonSelect rounded d-flex flex-column justify-content-center"
                >
                  <div className="buttonText">{radio.name}</div>
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
          <Col>
            {radioValue === "1" && (
              <div>
                {orderHistoryPaidCompleted.map((item: any) => (
                  <div key={item.orderId}>
                    {" "}
                    <OrderHistoryTable {...item} />{" "}
                  </div>
                ))}
              </div>
            )}
            {radioValue === "2" && (
              <div>
              {orderHistoryPaidCancel.map((item: any) => (
                <div key={item.orderId}>
                  {" "}
                  <OrderHistoryTableCancel {...item} />{" "}
                </div>
              ))}
            </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
