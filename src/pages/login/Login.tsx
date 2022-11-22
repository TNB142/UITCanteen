import { Container, Form, Row, Col, Stack, Button } from "react-bootstrap";
<<<<<<< HEAD:src/pages/login/Login.tsx
import { FunctionComponent, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
=======
>>>>>>> bc280bb28081a3b942ddbcdf405ec8056323b12e:src/pages/Login.tsx
import React, { useEffect, useState } from "react";
import Axios from "axios";
export function Login() {
  const forgetButton = (event : any) => {
    console.log(event.target);
    console.log("Forget Password");
  };

  Axios.defaults.withCredentials = true;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  return (
    <>
      <Container className="bg-light pt-5" id="login">
        <Row>
          <Col className="mb-5">
            <Stack
              // className="bg-white"
              style={{
                width: "80%",
              }}
            >
              <h1>Trải nghiệm đặt món online tại</h1>
              <h1
                className="fs-2"
                style={{
                  color: "red",
                }}
              >
                Canteen UIT
              </h1>
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
          <Col className="d-flex flex-row justify-content-center align-items-start">
            <div className="d-flex flex-column justify-content-center align-items-start">
              <h1 className="mb-3 mg-3">Đăng nhập</h1>
              <Form
                style={{
                  width: "373px",
                }}
              >
                <Form.Group controlId="fromPlaintextEmail">
                  <Form.Control
                    type="email"
                    placeholder="username/Email"
                    className="mb-3 border border-danger border-3"
                    style={{ height: "60px" }}
                    onChange={(e) => {
                      setUsername(e.target.value);
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
                      setPassword(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
              <p onClick={forgetButton}>Quên mật khẩu?</p>
              <Button
                className="bg-danger border border-danger mg-3 mb-3"
                onClick={login}
                style={{
                  width: "100%",
                  height: "60px",
                }}
              >
                Đăng nhập
              </Button>
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
                    backgroundColor: "black",
                  }}
                ></div>
                <span
                  className="text-center font-weight-bold"
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
                    backgroundColor: "black",
                  }}
                ></div>
              </div>
              <Button
                className="bg-danger border border-danger mg-3"
                style={{
                  width: "100%",
                  height: "60px",
                }}
              >
                Đăng ký
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
