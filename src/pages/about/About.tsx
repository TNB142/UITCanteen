import {
  Container,
  ButtonGroup,
  ToggleButton,
  Row,
  Col,
  Stack,
  Form,
  Button,
} from "react-bootstrap";
import { CustomButton } from "../../component/button/CustomButton";
import { useState } from "react";
import "./style.css";

export function About() {
  return (
    <Container className="pt-5">
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
          className="d-flex flex-row "
          // style={{
          //   paddingLeft:"10%"
          // }}
        >
          <div className="d-flex flex-column">
            <h1 className="headingAboutText">Liên hệ trực tiếp</h1>
            <div className="ContainerAboutFirstInfo">
              <div className="d-flex flex-row addressContainerAbout">
                <h3 className="addressAboutText">Địa chỉ:</h3>
                <div className="addressAboutDetail">
                  Nhà phục vụ sinh viên, ĐH Công nghệ Thông tin, phường Linh
                  Trung, Thủ Đức, TP.HCM
                </div>
              </div>
              <div className="d-flex flex-row">
                <h3 className="telephoneAboutText">Số điện thoại:</h3>
                <div className="w-100 telephoneAboutDetail">
                  0911 592 002 (Gặp Phúc)
                </div>
              </div>
            </div>

            <div>
              <h1 className="headingAboutText2">Liên hệ trực tiếp</h1>
              <p className="subHeadingAboutText2">
                Vấn đề của bạn sẽ được giải quyết trong vòng 24 giờ
              </p>
              <div>
                <Row>
                  <Col>
                    <Form.Group className="mb-3 d-flex flex-row formShape">
                      <Form.Control
                        className="formAboutName"
                        placeholder="Họ và tên"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3 d-flex flex-row ">
                      <Form.Control
                        className="formAboutName"
                        placeholder="Số điện thoại"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3 d-flex flex-row ">
                  <Form.Control className="formAboutName" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-row ">
                  <Form.Control
                    className="formAboutName"
                    placeholder="Lời nhắn"
                  />
                </Form.Group>
              </div>
              <div className="d-flex flex-column align-items-end">
                <Button className="buttonSend">Gửi</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
