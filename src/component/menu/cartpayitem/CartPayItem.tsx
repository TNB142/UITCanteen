import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../../context/shoppingCartContext";
import menuItems from "../../../data/items.json";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

type CartPayItemProps = {
  id: number;
  quantity: number;
};

export function CartPayItem({ id, quantity }: CartPayItemProps) {
  const {
    removeFromCart,

    getItemQuantity,
    cartQuantity,
  } = useShoppingCart();
  const [dishItem, setDishItem] = useState([]);

  useEffect(() => {
    async function getDish() {
      const data = await axios.get(
        "https://uitcanteen-backend.herokuapp.com/menu"
      );
      setDishItem(data.data.menu);
      return data.data.menu;
    }
    getDish();
  }, ["https://uitcanteen-backend.herokuapp.com/menu"]);

  const item: any = dishItem.find((i: any) => i.DishId === id);

  const DishType = () => {
    if (item.dishTypeId == 1) return "Món chính";
    else return "Món phụ";
  };

  if (item == null) return null;

  return (
    <Stack
      direction="horizontal"
      gap={4}
      className="PayCartCard d-flex align-items-center"
    >
      <div>
        <img src={item.image} className="payimgDish" />
      </div>
      <Stack
        direction="vertical"
        gap={2}
        className="food_name_pay_container d-flex justify-content-center"
      >
        <div>
          <div className="w-100">
            <div className="nameDish_text">{item.dishName}</div>
            <div className="typeDish_text">{DishType()}</div>
          </div>
          <div className="d-flex flex-row w-100 d-flex justify-content-end text_quantity">
            Số lượng:<div>{quantity}</div>
          </div>
        </div>
      </Stack>
    </Stack>
  );
}
