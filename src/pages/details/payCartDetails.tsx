import React from "react";
import { Container } from "react-bootstrap";
import { DetailInformation } from "../../component/detail/detailInformation";
import "./style.css";

export function PayCartDetails() {
  return (
    <>
      <Container>
        <h1 className="headingPage"> Chi tiết đơn hàng</h1>
        <DetailInformation />
      </Container>
    </>
  );
}
