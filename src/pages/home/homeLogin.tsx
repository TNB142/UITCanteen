import { Container, Row, Col, Stack } from "react-bootstrap";
import { Menu } from "../../component/menu/menu/Menu";
import { ProposedMenu } from "../../component/menu/proposemenu/proposedMenu";
// import { useRef } from "react";
import "../home/style.css";

export function HomeLogin() {
  //   const menu = useRef(null);

  return (
    <>
      <Container fluid id="home">
        {/* <div className="divDatMon"> */}
        <Container fluid className="orderNow_container">
          <Row className="rowContainer">
            <Col className="mt-5 mb-5">
              <Stack
                // className="bg-white"
                style={{
                  width: "80%",
                }}
              >
                <h1 className="orderNow_text">
                  Trải nghiệm đặt món online tại
                </h1>
                <h1
                  className="CanteenUIT_orderNow_text"
                  style={{
                    color: "red",
                  }}
                >
                  Canteen UIT
                </h1>
              </Stack>
            </Col>
            <Col className="mt-5 mb-5">
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
        </Container>

        {/* </div> */}

        <div id="menu" className="p-5 text-center">
          <h1 className="menu_text">
            Đề xuất <a style={{ color: "#F72D57" }}>cho bạn</a>
          </h1>
        </div>

        <ProposedMenu />

        <div id="menu" className="p-5 text-center">
          <h1 className="menu_text">
            Thực đơn <a style={{ color: "#F72D57" }}>hôm nay</a>
          </h1>
        </div>

        {/* <div className="mb-5 p-5"> */}
        <Menu />
        {/* </div> */}
      </Container>
    </>
  );
}
