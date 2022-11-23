import { Container, Form, Row, Col, Stack, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Axios from "axios";

export function Register() {
    Axios.defaults.withCredentials = true;

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const register = () => {
        if(confirmPassword==passwordReg){
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
            <Container className="bg-light pt-5">
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
                    <Col
                        // className="bg-danger"
                        className="d-flex flex-row justify-content-center align-items-start"
                    // style={{
                    //   paddingLeft:"10%"
                    // }}
                    >
                        <div className="d-flex flex-column justify-content-center align-items-start">
                            <h1 className="mb-3 mg-3">Register</h1>
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
                                <Form.Group className="mb-3" controlId="formPlainconfirmPassword">
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

                            <Button
                                className="bg-danger border border-danger mg-3 mb-3"
                                style={{
                                    width: "100%",
                                    height: "60px",
                                }}
                                onClick={register}
                            >
                                Register
                            </Button>
                            {registerStatus}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>)
}