//index.js
import React from "react";
import ReactDOM from "react-dom";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { useState } from "react";

export function CustomButton({ type, uId }: any) {
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
    <ToggleButtonGroup type={type}>
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant={"danger"}
          // name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => checkButton(e)}
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
    </ToggleButtonGroup>
  );
}
