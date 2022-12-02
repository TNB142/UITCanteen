import { Container, Form, Row, Col, Stack, Button, Nav } from "react-bootstrap";
import { FunctionComponent, useCallback } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./style.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login() {

  const forgetButton = (event: any) => {
    console.log(event.target);
    console.log("Forget Password");
  };

  const navigate = useNavigate();

  const registerButton = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  Axios.defaults.withCredentials = true;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  var userData;

  const login = () => {
    if (username == "") {
      toast("Please enter email");
    } else {
      Axios.post("https://uitcanteen-backend.herokuapp.com/login", {
        username: username,
        password: password,
      }).then((response) => {
        if (response.data.message) {
          toast(response.data.message);
        }
        else{
          userData = response.data;
          navigate("/");
          window.location.reload();
        }

      });
    }
  };
  return (
    <>
      <Container className="pt-5" id="login">
        <Row>
          <Col className="mb-5">
            <Stack>
              <h1 className="login_text">Trải nghiệm đặt món online tại</h1>
              <h1 className="CanteenUIT_login_text">Canteen UIT</h1>
              <div>
                <img
                  alt="Rounded image"
                  src="../imgs/UIT_CANTEEN1.png"
                  style={{
                    width: "542px",
                  }}
                  className="rounded-5"
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
              <h1 className="mb-3 mg-3 login_head">Đăng nhập</h1>
              <Form
                style={{
                  width: "373px",
                }}
              >
                <Form.Group controlId="fromPlaintextEmail">
                  <Form.Control
                    type="email"
                    placeholder="Tên đăng nhập/Email"
                    className="mb-3 border border-danger border-3 "
                    style={{ height: "60px" }}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Control
                    type="password"
                    placeholder="Mật khẩu"
                    className="mb-3 border border-danger border-3"
                    style={{ height: "60px" }}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>

              <Nav.Link to="/ForgetPassword" as={NavLink}>
                <p className="forgetpassword_text">Quên mật khẩu?</p>
              </Nav.Link>

              <button
                className=" text-center button_login_page"
                onClick={login}
              >
                <div className="login_page_Text">Đăng nhập</div>
              </button>
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
                  className="text-center font-weight-bold donthaveAcount_text"
                  style={{
                    width: "150%",
                  }}
                >
                  Chưa có tài khoản?
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
                className=" text-center button_login_page"
                onClick={registerButton}
              >
                <div className="login_page_Text">Đăng ký</div>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
}