import { Card, Button, Container, Alert } from "react-bootstrap";
import { useShoppingCart } from "../../../context/shoppingCartContext";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./style.css";

type MenuItemProps = {
  DishId: number;
  dishName: string;
  image: string;
};

export function MenuItem({ DishId, dishName, image }: MenuItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartQuantity,
  } = useShoppingCart();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const checkLoggedIn = window.localStorage.getItem("isLoggedIn")
  const moveToLogin = useCallback(() => {
    navigate("/Login");
  }, [navigate]);

  const quantity = getItemQuantity(DishId);
  const handleClick = (event: any) => {
    // 👇️ refers to the image element
    console.log(event.target);

    console.log("add to cart");
    if (checkLoggedIn) {
      if (cartQuantity < 3) increaseCartQuantity(DishId);
      else alert("Chỉ được thêm tối đa 3 món");
    } else {
      alert("Cần đăng nhập để chọn được món");
      moveToLogin();
    }
  };
  return (
    <Card className="h-100 containerItem">
      <Card.Img
        className="containerItemImage"
        variant="top"
        src={image}
        // height="200px"
        style={{ objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column justify-content-baseline align-items-center">
        <Card.Title
          className="
                d-flex
                flex-column
                justify-content-center
                align-items-center
                mb-4"
        >
          <span className="food_text">{dishName}</span>
        </Card.Title>
        <div
          className="mt-auto"
          style={{
            paddingLeft: "85%",
          }}
        >
          <img
            alt=""
            src="../svg/shopping-cart-add.svg"
            style={{
              width: "2.5rem",
              position: "relative",
              // transform:"translate(700%,-60%)"
            }}
            onClick={handleClick}
            className="shopping_cart_add"
          />
          {/* {quantity === 0 ? (
                        <Button className="w-100 " onClick={() => increaseCartQuantity(DishId)}>+Add To Cart
                        </Button>
                        // <img
                        // alt="" src="../svg/shopping-cart-add.svg"
                        // style={{
                        //     wDishIdth:"2.5rem",
                        //     position:"relative",
                        //     // transform:"translate(700%,-60%)"
                        // }}
                        // onClick={handleClick}
                        // />
                    ) : (
                        <div className="d-flex align-items-center
                    flex-column" style={{ gap: ".5rem" }}>
                            <div className="d-flex  align-items-center
                        justify-content-center"
                                style={{ gap: ".5rem" }}>
                                <Button onClick={() => decreaseCartQuantity(DishId)}>-</Button>
                                <div>
                                    <span className="fs-2">{quantity}</span> in cart
                                </div>
                                <Button onClick={() => increaseCartQuantity(DishId)}>+</Button>
                            </div>
                            <Button variant="danger" size="sm" onClick={() => removeFromCart(DishId)}>Remove</Button>
                        </div>
                    )} */}
        </div>
      </Card.Body>
    </Card>
  );
}
