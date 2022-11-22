import { Container, ButtonGroup, ToggleButton } from "react-bootstrap";
import { CustomButton } from "../../component/button/CustomButton";
import { useState } from "react";
import "./style.css";

export function About() {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Món chính", value: "1" },
    { name: "Món phụ", value: "2" },
  ];

  const checkButton = (valueTarget: any) => {
    // const newData = valueTarget;
    // var elems = document.querySelectorAll(".toggleButtonNew.active");
    // [].forEach.call(elems, function (el: any) {
    //   el.classList.remove("active");
    // });
    // target.closest("label").classList.toggle("active");
    setRadioValue(valueTarget);
    // setRadioValue(valueTarget);
    // console.log(valueTarget);
  };
  return (
    <Container>
      <h1>About us</h1>
    </Container>
  );
}
