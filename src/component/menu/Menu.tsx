import menuItems from "../../data/items.json";
import anothermenuItems from "../../data/items2.json";

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
import { MenuItem } from "../../component/menu/MenuItem";
import { useState } from "react";
import CustomButton from "../button/CustomButton";
import COLOR from "../../assets/color/index";
import "../menu/style.css";

export function Menu() {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Món chính", value: "1" },
    { name: "Món phụ", value: "2" },
  ];

  const checkButton = (currentTargetvalue: any) => {
    setRadioValue(currentTargetvalue);
    console.log(currentTargetvalue);
  };

  return (
    <>
      {/* <ButtonGroup className="d-flex flex-row w-50">
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
      </ButtonGroup> */}
      <div>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={"outline-danger"}
            // name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={() => checkButton(radio.value)}
            // className="d-flex justify-content-center w-50"
            // style={{
            //   width: "300px",
            //   height: "70.45px",
            // }}
            className="Button_radio"
          >
            <div className="p-1">
              <text className="Text_radio">{radio.name}</text>
            </div>
          </ToggleButton>
        ))}
        {radioValue === "1" && (
          <div className="containerMenu">
            <Row md={2} xs={3} lg={3} className="g-3">
              {menuItems.map((item) => (
                // <Col>{JSON.stringify(item)}</Col>
                <Col key={item.id}>
                  <MenuItem {...item} />
                </Col>
              ))}
            </Row>
          </div>
        )}
        {radioValue === "2" && (
          <div className="containerMenu">
            <Row md={2} xs={3} lg={3} className="g-3">
              {anothermenuItems.map((item) => (
                // <Col>{JSON.stringify(item)}</Col>
                <Col key={item.id}>
                  <MenuItem {...item} />
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>

      {/* <Row md={2} xs={3} lg={3} className="g-3">
          {menuItems.map((item) => (
            // <Col>{JSON.stringify(item)}</Col>
            <Col key={item.id}>
              <MenuItem {...item} />
            </Col>
          ))}
        </Row> */}
    </>
  );
}
