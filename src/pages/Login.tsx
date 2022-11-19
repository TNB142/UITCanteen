import { Container, Form, Row, Col, Stack, Button } from "react-bootstrap";

export function Login() {
  const forgetButton = (event) => {
    console.log(event.target);

    console.log("Forget Password");
  };
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
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="mb-3 border border-danger border-3"
                    style={{ height: "60px" }}
                  />
                </Form.Group>
              </Form>
              <p onClick={forgetButton}>Quên mật khẩu?</p>
              <Button
                className="bg-danger border border-danger mg-3 mb-3"
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
