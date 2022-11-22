import { NavItem, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/shoppingCartContext";
import { CartItem } from "./CartItem";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas
      className="rounded-5"
      show={isOpen}
      onHide={closeCart}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Giỏ hàng</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
