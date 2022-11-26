import {
  Offcanvas,
  ToggleButton,
  ToggleButtonGroup,
  Container,
  Stack,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { useShoppingCart } from "../../../context/shoppingCartContext";
import { CartPayItem } from "../cartpayitem/cartpayitem";

import "./style.css";

type PayCartProps = {
  isOpenPay: boolean;
};

export function PayCart({ isOpenPay }: PayCartProps) {
  const { closePayCart, cartItems, cartQuantity } = useShoppingCart();
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "9:30-10:30", value: "1" },
    { name: "10:30-11:30", value: "2" },
    { name: "11:30-12:30", value: "3" },
  ];

  const [checkMethod, setCheckMethod] = useState("1");
  const PayMethod = [
    { url: "../public/svg/momo.svg", name: "Ví Momo", value: "1" },
    { url: "../public/svg/banking.svg", name: "Online Banking", value: "2" },
  ];

  const checkButton = (currentTargetvalue: any) => {
    setRadioValue(currentTargetvalue);
    console.log(currentTargetvalue);
  };
  const checkButtonMethod = (currentTargetvalue: any) => {
    setCheckMethod(currentTargetvalue);
    console.log(currentTargetvalue);
  };

  return (
    <Offcanvas
      className="pay_cart_container"
      show={isOpenPay}
      // onHide={closePayCart}
      placement="end"
    >
      <Offcanvas.Header className="d-flex flex-row">
        <Offcanvas.Title className="d-flex flex-row w-100">
          <div className="d-flex flex-row shopping_cart_title_item">
            <img
              alt=""
              src="../svg/arrow-back-circle-sharp_2.svg"
              onClick={closePayCart}
              className="back_arrow_pay"
            />
            <div className="paying_cart_title_text">Thanh toán</div>
          </div>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="paying_cart_title__body_text">Giờ nhận đơn hàng</div>
        <Container fluid className="pt-3">
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant={"outline-danger select_time_button"}
              id={`radio-${idx}+2`}
              value={radio.value}
              onChange={() => checkButton(radio.value)}
              checked={radioValue === radio.value}
            >
              <div className="button_text">{radio.name}</div>
            </ToggleButton>
          ))}
        </Container>
        <div className="pt-4 paying_cart_title__body_text">Chi tiết món ăn</div>
        <Stack gap={3} className="pt-3 d-flex flex-column h-80">
          {cartItems.map((item) => (
            <CartPayItem key={item.id} {...item} />
          ))}
        </Stack>
        <div className="pt-4 paying_cart_title__body_text">
          Chọn phương thức thanh toán
        </div>
        <Container fluid className="pt-3 d-flex flex-column">
          {PayMethod.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant={"outline-danger select_time_button"}
              id={`radio-${idx}+3`}
              value={radio.value}
              onChange={() => checkButtonMethod(radio.value)}
              checked={checkMethod === radio.value}
              className="payment_container"
            >
              <div className="d-flex flex-row align-items-center button_text">
                <img
                  alt=""
                  src={radio.url}
                  className="d-flex flex-row justify-content-start imgMethod"
                />
                {radio.name}
              </div>
            </ToggleButton>
          ))}
        </Container>
      </Offcanvas.Body>
      {cartQuantity == 2 && (
        <Container className="d-flex flex-column thanhtoan_container_pay">
          <div className="p-3 d-fex flex-column w-100 ">
            <div className="d-flex flex-row  align-items-center justify-content-center text-center">
              <div className="label_text_pay">Thành tiền </div>
              <div
                style={{
                  width: "5%",
                  height: "3px",
                  backgroundColor: "#C2C2C2",
                  borderRadius: "2px 2px",
                  marginLeft: "25%",
                  marginRight: "25%",
                }}
              ></div>
              <div className="currency_number_pay">25.000 vnd</div>
            </div>
          </div>
          <div>
            <div>
              {""}
              <div
                style={{
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#C2C2C2",
                  borderRadius: "2px 2px",
                }}
              ></div>
            </div>
          </div>
          <div className="d-fex flex-row  w-100 p-3">
            <div className="Total_container_pay d-flex flex-row">
              <div className="Total_text_pay ">Tổng cộng:</div>
              <div className="currency_number_total_pay">25.000vnd</div>
              <div className="d-flex flex-row justify-content-end w-100 button_div_pay">
                <button className="button_order">Đặt món</button>
              </div>
            </div>
          </div>
        </Container>
      )}
      {cartQuantity == 3 && (
        <Container className="d-flex flex-column thanhtoan_container_pay">
          <div className="p-3 d-fex flex-column w-100 ">
            <div className="d-flex flex-row  align-items-center justify-content-center text-center">
              <div className="label_text_pay">Thành tiền </div>
              <div
                style={{
                  width: "5%",
                  height: "3px",
                  backgroundColor: "#C2C2C2",
                  borderRadius: "2px 2px",
                  marginLeft: "25%",
                  marginRight: "25%",
                }}
              ></div>
              <div className="currency_number_pay">30.000 vnd</div>
            </div>
          </div>
          <div>
            <div>
              {""}
              <div
                style={{
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#C2C2C2",
                  borderRadius: "2px 2px",
                }}
              ></div>
            </div>
          </div>
          <div className="d-fex flex-row  w-100 p-3">
            <div className="Total_container_pay d-flex flex-row">
              <div className="Total_text_pay ">Tổng cộng:</div>
              <div className="currency_number_total_pay">30.000vnd</div>
              <div className="d-flex flex-row justify-content-end w-100 button_div_pay">
                <button className="button_order">Đặt món</button>
              </div>
            </div>
          </div>
        </Container>
      )}
    </Offcanvas>
  );
}
