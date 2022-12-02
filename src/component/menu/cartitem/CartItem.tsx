import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../../context/shoppingCartContext";
import menuItems from "../../../data/items.json";
import { useEffect, useState } from "react";
import axios from "axios";
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

  // const [dishItem, setDishItem] = useState([]);
  // useEffect(() => {
  //   async function getDish() {
  //     const data = await axios.get(
  //       "https://uitcanteen-backend.herokuapp.com/menu"
  //     );
  //     setDishItem(data.data.menu);
  //     return data.data.menu;
  //   }
  //   getDish();
  // }, ["https://uitcanteen-backend.herokuapp.com/menu"]);

  const checkItem:any = JSON.parse(window.localStorage.getItem('fullMenu')|| '{}')

  const item:any = checkItem.find((i:any) => i.DishId === id);

  const DishType = () => {
    if (item.dishTypeId == 1)
      return "Món chính"
    else
      return "Món phụ"
  }

  if (item == null) return null;
  const increaseClick = (event: any) => {
    // 👇️ refers to the image element
    console.log(event.target);

    console.log("increase item");
    if (cartQuantity < 3) increaseCartQuantity(item.DishId);
    else alert("Chỉ được thêm tối đa 3 món");
  };
  const decreaseClick = (event: any) => {
    // 👇️ refers to the image element
    console.log(event.target);

    console.log("decrease item");
    decreaseCartQuantity(item.DishId);
  };
  return (
    <Stack
      direction="horizontal"
      gap={4}
      className="CartCard d-flex align-items-center"
    >
      <div>
        <img src={item.image} className="imgDish" />
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
            onClick={() => removeFromCart(item.DishId)}
          />
        </div>
        <div>
          <div className="w-100">
            <div className="nameDish_text">{item.dishName}</div>
            <div className="typeDish_text">{DishType()}</div>
          </div>
        </div>
        <div className="h-100 d-flex justify-content-end">
          <button className="button_container_1" onClick={decreaseClick}>
            -
          </button>
          <div className="quantity_text">{getItemQuantity(item.DishId)}</div>
          <button className="button_container_2" onClick={increaseClick}>
            +
          </button>
        </div>
      </Stack>
    </Stack>
  );
}