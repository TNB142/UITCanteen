import menuItems from "../../data/items.json";
import {
  Col,
  Container,
  Row,
  Button,
  Stack,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";
import { MenuItem } from "../../component/menu/MenuItem";
import { useState } from "react";

export function ProposedMenu() {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Món chính", value: "1" },
    { name: "Món phụ", value: "2" },
  ];

  return (
    <>
      <ButtonGroup className="d-flex flex-row w-50">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={"outline-danger"}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            className="mb-3 rounded"
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <Row md={2} xs={3} lg={3} className="g-3">
        {menuItems.map((item) => (
          // <Col>{JSON.stringify(item)}</Col>
          <Col key={item.id}>
            <MenuItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
