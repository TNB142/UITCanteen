import { NavItem, Offcanvas, Stack, Container } from "react-bootstrap";
import { useShoppingCart } from "../../../context/shoppingCartContext";
import { CartItem } from "../cartitem/CartItem";
import "./style.css";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, removeFromCart, cartQuantity } =
    useShoppingCart();

  const Remove = () => {
    cartItems.map((item) => removeFromCart(item.id));
  };

  return (
    <Offcanvas
      className="shopping_cart_container"
      show={isOpen}
      onHide={closeCart}
      placement="end"
    >
      <Offcanvas.Header>
        <Offcanvas.Title className="d-flex flex-row w-100">
          <div className="d-flex flex-row shopping_cart_title_item">
            <div className="shopping_cart_title_text">Giỏ hàng</div>
            <img alt="" src="../svg/shopping-cart_2.svg" />
          </div>
          <div
            className="d-flex flex-row justify-content-end Delete_effect shopping_cart_title_item"
            onClick={() => Remove()}
          >
            <div className="shopping_cart_title_delete">Xoá</div>
            <img alt="" src="../svg/refresh.svg" />
          </div>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3} className="d-flex flex-column h-100">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Offcanvas.Body>
      {cartQuantity == 2 && (
        <Container className="d-flex flex-column thanhtoan_container">
        <div className="p-3 d-fex flex-column w-100 ">
          <div className="d-flex flex-row  align-items-center justify-content-center text-center">
            <div className="label_text">Thành tiền{" "}</div>
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
            <div className="currency_number">25.000 vnd</div>
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
          <div className="Total_container d-flex flex-row">
            <div className="Total_text ">Tổng cộng:</div>
            <div className="currency_number_total">25.000vnd</div>
            <div className="d-flex flex-row justify-content-end w-100 button_div">
              <button className="button_orderNow">Đặt món ngay</button>
            </div>
          </div>
        </div>
      </Container>
      )}
      {cartQuantity == 3 && (
        <Container className="d-flex flex-column thanhtoan_container">
        <div className="p-3 d-fex flex-column w-100 ">
          <div className="d-flex flex-row  align-items-center justify-content-center text-center">
            <div className="label_text">Thành tiền{" "}</div>
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
            <div className="currency_number">30.000 vnd</div>
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
          <div className="Total_container d-flex flex-row">
            <div className="Total_text ">Tổng cộng:</div>
            <div className="currency_number_total">30.000vnd</div>
            <div className="d-flex flex-row justify-content-end w-100 button_div">
              <button className="button_orderNow">Đặt món ngay</button>
            </div>
          </div>
        </div>
      </Container>
      )}
    </Offcanvas>
  );
}
