import React from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Stack,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";

function CustomButton(props: any) {
  return (
    <div>
      <Button
        // type="radio"
        // variant={"outline-danger"}
        // name="radio"
        // value={radio.value}
        // checked={radioValue === radio.value}
        // onChange={(e) => setRadioValue(e.currentTarget.value)}
        onClick={() => props.onClickChange()}
        className="button"
        style={{
          backgroundColor: props.isClick ? props.backgroundColor : 'white',
          color: props.color,
          width: props.width,
          height: props.height,
          borderRadius: props.borderRadius,
          fontFamily: props.fontFamily,
          fontSize: props.fontSize,
          fontStyle: props.fontStyle,
          textDecorationStyle: props.textDecorationStyle
        }}
      >
        {props.text}
      </Button>
    </div>
  );
}

export default CustomButton;
