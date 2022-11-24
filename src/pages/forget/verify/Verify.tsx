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

export function VerifyEmail() {
  const navigate = useNavigate();

  const verifyNext = useCallback(() => {
    navigate("./RePassword");
  }, [navigate]);
  const Move_back = useCallback(() => {
    navigate("/ForgetPassword");
  }, [navigate]);



  return (
    <>
      <Container className="bg-light pt-5" id="register">
        <Row>
          <Col className="mb-5">
            <Stack
            // className="bg-white"
            >
              <h1 className="verify_text">Trải nghiệm đặt món online tại</h1>
              <h1 className="CanteenUIT_verify_text">Canteen UIT</h1>
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
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="mb-3 mg-3 verify_head">Xác minh tài khoản</h1>
              <div className="w-100 mb-3 mg-3 d-flex flex-column justify-content-center align-items-center">
                <div className="paragraph_text">
                  Mã xác minh đã được gửi đến địa chỉ email{" "}
                  <a
                    style={{
                      color: "#F72D57",
                    }}
                  >
                    test@gmail.com
                  </a>
                </div>
                <div className="paragraph_text">Vui lòng xác minh</div>
              </div>
              <Form
                style={{
                  width: "373px",
                }}
              >
                <Form.Group controlId="fromPlaintextEmail">
                  <Form.Control
                    type="pin"
                    placeholder="Mã xác nhận"
                    className="mb-3 border border-danger border-3 "
                    style={{ height: "60px" }}
                  />
                </Form.Group>
              </Form>
              <button
                className=" text-center button_verify_Next_page"
                onClick={verifyNext}
              >
                <div className="forget_verify_next_page_Text">Tiếp tục</div>
              </button>
              <div className="pt-2 w-100 d-flex flex-row justify-content-center">
                <img
                  alt=""
                  src="../../svg/arrow-back-circle-sharp.svg"
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
