import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../../context/shoppingCartContext";
import menuItems from "../../../data/items.json";
import "./style.css";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const {
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
    cartQuantity,
  } = useShoppingCart();
  const item = menuItems.find((i) => i.id === id);
  if (item == null) return null;
  const increaseClick = (event: any) => {
    // 👇️ refers to the image element
    console.log(event.target);

    console.log("increase item");
    if (cartQuantity < 3) increaseCartQuantity(item.id);
    else alert("Chỉ được thêm tối đa 3 món");
  };
  const decreaseClick = (event: any) => {
    // 👇️ refers to the image element
    console.log(event.target);

    console.log("decrease item");
    decreaseCartQuantity(item.id);
  };
  return (
    <Stack
      direction="horizontal"
      gap={4}
      className="CartCard d-flex align-items-center"
    >
      <div>
        <img src={item.imgUrl} className="imgDish" />
      </div>
      <Stack
        direction="vertical"
        gap={2}
        className="food_name_container d-flex justify-content-center"
      >
        <div className="d-flex flex-row justify-content-end trash_item">
          <img
            alt=""
            src="../svg/trash-can-empty.svg"
            onClick={() => removeFromCart(item.id)}
          />
        </div>
        <div>
          <div className="w-100">
            <div className="nameDish_text">{item.name}</div>
            <div className="typeDish_text">{item.type}</div>
          </div>
        </div>
        <div className="h-100 d-flex justify-content-end">
          <button className="button_container_1" onClick={decreaseClick}>
            -
          </button>
          <div className="quantity_text">{getItemQuantity(item.id)}</div>
          <button className="button_container_2" onClick={increaseClick}>
            +
          </button>
        </div>
      </Stack>
    </Stack>
  );
}
