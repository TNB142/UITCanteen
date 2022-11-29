import { Card, Button, Container } from "react-bootstrap";
import { useShoppingCart } from "../../../context/shoppingCartContext";
import { useState } from "react";
import "./style.css";

type MenuItemProps = {
  id: number;
  name: string;
  imgUrl: string;
};

export function MenuItem({ id, name, imgUrl }: MenuItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartQuantity
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  const handleClick = (event: any) => {
    // 👇️ refers to the image element
    console.log(event.target);

    console.log("add to cart");
    if (cartQuantity <3)
      increaseCartQuantity(id);
    else alert("Chỉ được thêm tối đa 3 món")
  };
  return (
    <Card className="h-100 containerItem">
      <Card.Img
        className="containerItemImage"
        variant="top"
        src={imgUrl}
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
          <span className="food_text">{name}</span>
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
                        <Button className="w-100 " onClick={() => increaseCartQuantity(id)}>+Add To Cart
                        </Button>
                        // <img
                        // alt="" src="../svg/shopping-cart-add.svg"
                        // style={{
                        //     width:"2.5rem",
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
                                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div>
                                    <span className="fs-2">{quantity}</span> in cart
                                </div>
                                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                        </div>
                    )} */}
        </div>
      </Card.Body>
    </Card>
  );
}
