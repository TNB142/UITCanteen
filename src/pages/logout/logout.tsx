import { Container, Form, Row, Col, Stack, Button, Nav } from "react-bootstrap";
import { FunctionComponent, useCallback } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./style.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Logout() {
    const navigate = useNavigate();
    const loginButton = useCallback(() => {
        navigate("/Login");
        window.location.reload();
    }, [navigate]);

    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:3001/logout").then((response) => {
        if (response.data.message) {
            toast(response.data.message);
        }
    });
    return (
        <>
        <ToastContainer />
            <Container className="pt-5" id="login">
                <Row>
                    <Col className="mb-5">
                        <Stack>
                            <h1 className="login_text">Trải nghiệm đặt món online tại</h1>
                            <h1 className="CanteenUIT_login_text">Canteen UIT</h1>
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
                            <h1 className="mb-3 mg-3 login_head">Đăng Xuất</h1>

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
                                    Muốn đăng nhập lại khum?
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
                                onClick={loginButton}
                            >
                                <div className="login_page_Text"> Đăng Nhập </div>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}