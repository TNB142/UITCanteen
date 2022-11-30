import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./style.css";
import menuItems from "../../../data/items.json";

type DetailImageProps = {
  id: number;
  quantity: number;
};

export function DetailImage({ id, quantity }: DetailImageProps) {
  const item = menuItems.find((i) => i.DishId === id);
  if (item == null) return null;
  return (
    <>
      <Row>
        <Col>
          <img alt="" src={item.image} className="dishImage" />
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <div className=" d-flex flex-row">
            <p className="dishName"> {item.dishName}</p>
            <p className="dishQuantity">x{quantity}</p>
          </div>
          <Button variant="outline-danger" >Viết đánh giá</Button>
        </Col>
      </Row>
    </>
  );
}
