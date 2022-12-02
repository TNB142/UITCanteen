import React from "react";
import "./style.css";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import DatePicker from "react-date-picker";
export function UserForm() {
  const [isEdited, setIsEdited] = useState("false");
  const [fullName, setFullName] = useState("Họ và tên");
  const [phoneNumber, setPhoneNumber] = useState("Số điện thoại");
  const [birthday, setBirthday] = useState("Ngày sinh");

  const [value, onChange] = useState(new Date());

  const checkEdit = () => {
    setIsEdited("true");
    console.log("click edit");
  };
  const checkSave = () => {
    setIsEdited("false");
    console.log("click save");
  };
  const editName = (currentTargetvalue: any) => {
    setFullName(currentTargetvalue);
    console.log(currentTargetvalue);
  };
  const editPhone = (currentTargetvalue: any) => {
    setPhoneNumber(currentTargetvalue);
    console.log(currentTargetvalue);
  };
  const editBirthday = (currentTargetvalue: any) => {
    setBirthday(currentTargetvalue);
    console.log(currentTargetvalue);
  };
  return (
    <>
      {isEdited == "false" && (
        <div className="d-flex userInfoContainer">
          <Form.Group className="mb-3 d-flex flex-row formGroup">
            <Form.Label className="d-flex formLabel">
              <img alt="" src="../svg/user-avatar.svg" />
            </Form.Label>
            <Form.Control
              className="formControl"
              placeholder={fullName}
              disabled
            />
          </Form.Group>
          <div className="d-flex flex-column align-items-center justify-content-center">
            {" "}
            <div
              style={{
                width: "95%",
                height: "3px",
                backgroundColor: "#D9D9D9",
                borderRadius: "2px 2px",
              }}
            ></div>
          </div>
          <Form.Group className="mb-3 d-flex flex-row formGroup">
            <Form.Label className="d-flex formLabel">
              {" "}
              <img alt="" src="../svg/phone.svg" />
            </Form.Label>
            <Form.Control
              className="formControl"
              placeholder={phoneNumber}
              disabled
            />
          </Form.Group>
          <div className="d-flex flex-column align-items-center justify-content-center">
            {" "}
            <div
              style={{
                width: "95%",
                height: "3px",
                backgroundColor: "#D9D9D9",
                borderRadius: "2px 2px",
              }}
            ></div>
          </div>

          <Form.Group className="mb-3 d-flex flex-row formGroup">
            <Form.Label className="d-flex formLabel">
              {" "}
              <img alt="" src="../svg/calendarIcon.svg" />
            </Form.Label>
            <Form.Control
              className="formControl"
              placeholder={birthday}
              disabled
            />
          </Form.Group>
          <div className="d-flex flex-column align-items-center justify-content-center">
            {" "}
            <div
              style={{
                width: "95%",
                height: "3px",
                backgroundColor: "#D9D9D9",
                borderRadius: "2px 2px",
              }}
            ></div>
          </div>
          <div className="h-100 d-flex flex-column justify-content-end align-items-end">
            <Button className="ButtonCheck" onClick={checkEdit}>
              Chỉnh sửa thông tin
            </Button>
          </div>
        </div>
      )}
      {isEdited == "true" && (
        <div className="d-flex userInfoContainer">
          <Form.Group className="mb-3 d-flex flex-row formGroup">
            <Form.Label className="d-flex formLabel">
              <img alt="" src="../svg/user-avatar.svg" />
            </Form.Label>
            <Form.Control
              className="formControl"
              placeholder={fullName}
              onChange={(e: any) => editName(e.target.value)}
              // disabled
            />
          </Form.Group>
          <div className="d-flex flex-column align-items-center justify-content-center">
            {" "}
            <div
              style={{
                width: "95%",
                height: "3px",
                backgroundColor: "#D9D9D9",
                borderRadius: "2px 2px",
              }}
            ></div>
          </div>
          <Form.Group className="mb-3 d-flex flex-row formGroup">
            <Form.Label className="d-flex formLabel">
              {" "}
              <img alt="" src="../svg/phone.svg" />
            </Form.Label>
            <Form.Control
              className="formControl"
              placeholder={phoneNumber}
              onChange={(e: any) => editPhone(e.target.value)}

              //   disabled
            />
          </Form.Group>
          <div className="d-flex flex-column align-items-center justify-content-center">
            {" "}
            <div
              style={{
                width: "95%",
                height: "3px",
                backgroundColor: "#D9D9D9",
                borderRadius: "2px 2px",
              }}
            ></div>
          </div>

          <Form.Group className="mb-3 d-flex flex-row formGroup">
            <Form.Label className="d-flex formLabel">
              {" "}
              <img alt="" src="../svg/calendarIcon.svg" />
            </Form.Label>
            <Form.Control
              type="date"
              className="formControl"
              placeholder={birthday}
              min="01-01-1900"
              max="31-12-2100"
              data-date-format="dd/mm/yyyy"
              onChange={(e: any) => editBirthday(e.target.value)}
              //   disabled
            />
          </Form.Group>
          <div className="d-flex flex-column align-items-center justify-content-center">
            {" "}
            <div
              style={{
                width: "95%",
                height: "3px",
                backgroundColor: "#D9D9D9",
                borderRadius: "2px 2px",
              }}
            ></div>
          </div>
          <div className="h-100 d-flex flex-column justify-content-end align-items-end">
            <Button className="ButtonCheck" onClick={checkSave}>
              Lưu thông tin
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
