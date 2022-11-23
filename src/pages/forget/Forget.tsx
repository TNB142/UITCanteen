import {
  Container,
  Row,
  Col,
  Stack,
  Nav,
  Form,
  FormGroup,
} from "react-bootstrap";
import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./style.css";

export function ForgetPassword() {
  const navigate = useNavigate();

  const forgetNext = useCallback(() => {
    console.log("Move back to verify email")
    navigate("./Verify");

  }, [navigate]);
  const Move_back = useCallback(() => {
    console.log("Move back to login")
    navigate("/Login");
  }, [navigate]);

  return (
    <>
      <Container className="bg-light pt-5" id="register">
        <Row>
          <Col className="mb-5">
            <Stack
            // className="bg-white"
            >
              <h1 className="forget_text">Trải nghiệm đặt món online tại</h1>
              <h1 className="CanteenUIT_forget_text">Canteen UIT</h1>
              <div>
                <img
                  alt=""
                  src="../imgs/UIT_CANTEEN.png"
                  style={{
                    width: "542px",
                  }}
                />
              </div>
            </Stack>
          </Col>
          <Col
            // className="bg-danger"
            className="d-flex flex-row justify-content-center align-items-start"
            // style={{
            //   paddingLeft:"10%"
            // }}
          >
            <div className="d-flex flex-column justify-content-center align-items-start">
              <h1 className="mb-3 mg-3 forget_head">Quên mật khẩu</h1>
              <Form
                style={{
                  width: "373px",
                }}
              >
                <Form.Group controlId="fromPlaintextEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="mb-3 border border-danger border-3 "
                    style={{ height: "60px" }}
                  />
                </Form.Group>
              </Form>
              <button
                className=" text-center button_Next_page"
                onClick={forgetNext}
              >
                <div className="forget_next_page_Text">Tiếp tục</div>
              </button>
              <div className="pt-2 w-100 d-flex flex-row justify-content-center">
                <img
                  alt=""
                  src="../../../../public/svg/arrow-back-circle-sharp.svg"
                  className="previous_page_button"
                  onClick={Move_back}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
