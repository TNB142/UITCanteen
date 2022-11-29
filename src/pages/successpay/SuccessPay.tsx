import React from "react";
import { Container } from "react-bootstrap";
import { ReceiptInformation } from "../../component/receiptInforamtion/receiptInformation";

export function SuccessPay() {
  return (
    <React.Fragment>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="noticeOk">
          Chúc mừng, đơn hàng thanh toán thành công !
        </h1>
        <div className="iconOk">
          <img
            alt=""
            src="../public/svg/fireworks.svg"
            className="imgLogoSucess"
          />
          <img
            alt=""
            src="../public/svg/fireworks.svg"
            className="imgLogoSucess"
          />
          <img
            alt=""
            src="../public/svg/fireworks.svg"
            className="imgLogoSucess"
          />
        </div>

        <ReceiptInformation />

        <p className="notice">
          Khách hàng vui lòng đến Nhà phục vụ sinh viên UIT nhận món đúng khung
          giờ đã chọn. Trong trường hợp khách hàng không nhận món sau 30 phút,
          hệ thống mặc định đơn hàng không thành công, đơn đã thanh toán sẽ
          không được hoàn tiền.
        </p>
      </Container>
    </React.Fragment>
  );
}
