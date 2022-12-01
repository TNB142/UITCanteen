import menuItems from "../../../data/items.json";
import anothermenuItems from "../../../data/items2.json";

import {
  Col,
  Container,
  Row,
  Button,
  Stack,
  ToggleButton,
  ButtonToolbar,
  ToggleButtonGroup,
  ButtonGroup,
} from "react-bootstrap";
import { MenuItem } from "../menuitem/MenuItem";
import { useEffect, useState } from "react";
import "../menu/style.css";
import "./style.css";
import axios from "axios";

export function ProposedMenu() {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Món chính", value: "1" },
    { name: "Món phụ", value: "2" },
  ];

  const checkButton = (currentTargetvalue: any) => {
    setRadioValue(currentTargetvalue);
    console.log(currentTargetvalue);
  };

  const [dishItemMain, setDishItemMain] = useState([]);
  const [dishItemSide, setDishItemSide] = useState([]);

  useEffect(() => {
    async function getDish() {
      const data_main = await axios.get(
        "https://uitcanteen-backend.herokuapp.com/menu/main/proposed"
      );
      setDishItemMain(data_main.data.menu);
      const data_side = await axios.get(
        "https://uitcanteen-backend.herokuapp.com/menu/side/proposed"
      );
      setDishItemSide(data_side.data.menu);
      return data_main.data.menu, data_side.data.menu;
    }
    getDish();
  }, [
    "https://uitcanteen-backend.herokuapp.com/menu/main",
    "https://uitcanteen-backend.herokuapp.com/menu/side",
  ]);
  return (
    <>
      <Container fluid className="">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}+1`}
            type="radio"
            variant={"outline-danger"}
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={() => checkButton(radio.value)}
            className="Button_radio"
          >
            <div className="p-1">
              <text className="Text_radio">{radio.name}</text>
            </div>
          </ToggleButton>
        ))}
        {radioValue === "1" && (
          <Container fluid className="containerMenu">
            <Row md={2} xs={3} lg={5}>
              {dishItemMain.map((item: any) => (
                // <Col>{JSON.stringify(item)}</Col>
                <Col key={item.DishId} className="g-3">
                  <MenuItem {...item} />
                </Col>
              ))}
            </Row>
          </Container>
        )}
        {radioValue === "2" && (
          <Container fluid className="containerMenu">
            <Row md={2} xs={3} lg={3}>
              {dishItemSide.map((item: any) => (
                // <Col>{JSON.stringify(item)}</Col>
                <Col key={item.DishId} className="g-3">
                  <MenuItem {...item} />
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </Container>
    </>
  );
}
