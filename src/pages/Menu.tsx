import menuItems from "../data/items.json";
import {
  Col,
  Container,
  Row,
  Button,
  Stack,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";
import { MenuItem } from "../component/MenuItem";
import { useState } from "react";
import {Menu} from "../component/Menu"

export function Menu_page() {
  return (
    <>
      <Container>
        <div id="menu">
          <h1 className="text-center">
            <u>Thực đơn hôm nay</u>
          </h1>
        </div>

        <div className="bg-white mb-5 p-5 shadow-sm">
          <Menu />
        </div>
      </Container>
    </>
  );
}
