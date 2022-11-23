import { Container, Form, Row, Col, Stack, Button } from "react-bootstrap";
import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./style.css";

export function Register() {
  const navigate = useNavigate();
  const loginButton = useCallback(() => {
    navigate("/Login");
  }, [navigate]);

  Axios.defaults.withCredentials = true;

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    if (confirmPassword == passwordReg) {
      Axios.post("http://localhost:3001/register", {
        username: usernameReg,
        password: passwordReg,
      }).then((response) => {
        console.log(response);
      });
    } else {
      setRegisterStatus("confirm password doesn't match");
    }
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <>
      <Container className="pt-5" id="register">
        <Row>
          <Col className="mb-5">
            <Stack
            // className="bg-white"
            >
              <h1 className="register_text">Trải nghiệm đặt món online tại</h1>
              <h1 className="CanteenUIT_register_text">Canteen UIT</h1>
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
              <h1 className="mb-3 mg-3 register_title">Đăng ký</h1>
              <Form
                style={{
                  width: "373px",
                }}
              >
                <Form.Group controlId="fromPlaintextEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="mb-3 border border-danger border-3"
                    style={{ height: "60px" }}
                    onChange={(e) => {
                      setUsernameReg(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="mb-3 border border-danger border-3"
                    style={{ height: "60px" }}
                    onChange={(e) => {
                      setPasswordReg(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formPlainconfirmPassword"
                >
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    className="mb-3 border border-danger border-3"
                    style={{ height: "60px" }}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>

              <button
                className="text-center button_register_page"
                onClick={register}
              >
                <div className="register_page_Text">Đăng ký tài khoản</div>
              </button>
              {registerStatus}
              <div
                className="d-flex flex-row align-items-center mb-3"
                style={{
                  width: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "3px",
                    backgroundColor: "#3F3F3F",
                    borderRadius: "2px 2px",
                  }}
                ></div>
                <span
                  className="text-center font-weight-bold haveAcount_text"
                  style={{
                    width: "150%",
                  }}
                >
                  Đã có tài khoản?
                </span>
                <div
                  // className="text-center"
                  style={{
                    width: "100%",
                    height: "3px",
                    backgroundColor: "#3F3F3F",
                    borderRadius: "2px 2px",
                  }}
                ></div>
              </div>

              <button
                className="text-center button_register_page"
                onClick={register}
              >
                <div className="register_page_Text">Đăng nhập</div>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
