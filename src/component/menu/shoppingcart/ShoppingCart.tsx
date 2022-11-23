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
            <img alt="" src="../../../public/svg/shopping-cart_2.svg" />
          </div>
          <div
            className="d-flex flex-row justify-content-end Delete_effect shopping_cart_title_item"
            onClick={() => Remove()}
          >
            <div className="shopping_cart_title_delete">Xoá</div>
            <img alt="" src="../../../public/svg/refresh.svg" />
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
        <Container className="d-flex flex-row thanhtoan_container">
          <div className="p-4 d-fex flex-row">
            <div className="d-flex flex-row label_text">
              Thành tiền<div className="currency_number">25.000vnd</div>
            </div>
          </div>
        </Container>
      )}
      {cartQuantity == 3 && (
        <Container className="d-flex flex-row thanhtoan_container">
          <div className="p-4 d-fex flex-row">
            <div className="d-flex flex-row label_text">
              Thành tiền<div className="currency_number">30.000vnd</div>
            </div>
          </div>
        </Container>
      )}
    </Offcanvas>
  );
}
