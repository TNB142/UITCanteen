import {
  Col,
  Container,
  Row,
  Button,
  Stack,
  ToggleButton,
  ButtonGroup
} from "react-bootstrap";
import React, { useState } from "react";
import { OrderHistoryTable } from "../../component/history/orderHistoryTable";


export function History() {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Đơn hàng đã đặt", value: "1" },
    { name: "Đơn hàng đã huỷ", value: "2" },
  ];
  return (
    <>
      <Container
        className="bg-light"
        style={{
          height: "100%",
        }}
        id="history"
      >
        <div>
          <p>Xin chào, user_name</p>
        </div>
        <Row>
          <Col>
            <ButtonGroup
            className="d-flex flex-column">
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={"outline-danger"}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                  className="mb-3 rounded"
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
          <Col>
            <div>
              <h3 className="mb-5">Lịch sử đặt hàng</h3>
              <OrderHistoryTable/>
            </div>

          </Col>
        </Row>
      </Container>
    </>
  );
}
