import { Container, Row, Col, Stack, Section } from "react-bootstrap";
import { Menu } from "../component/Menu";
import { ProposedMenu } from "../component/proposedMenu";
// import { useRef } from "react";

export function Home() {
  //   const menu = useRef(null);

  return (
    <>
      <Container className="bg-light" id="home">
        <Row className="mt-5 mb-5">
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
            </Stack>
          </Col>
          <Col>
            <div>
              <img
                alt="Rounded image"
                src="../imgs/UIT_CANTEEN1.png"
                style={{
                  width: "100%",
                }}
                className="rounded-5"
              />
            </div>
          </Col>
        </Row>
        <h1 className="text-center">
          <u>Đề xuất cho bạn</u>
        </h1>
        <div className="bg-white mb-5 p-5 shadow-sm">
          {/* <ProposedMenu /> */}
        </div>
        <div id="menu">
          <h1 className="text-center">
            <u>Thực đơn hôm nay</u>
          </h1>
        </div>

        <div className="bg-white mb-5 p-5 shadow-sm">
          <Menu />
        </div>
      </Container>
    </>
  );
}
