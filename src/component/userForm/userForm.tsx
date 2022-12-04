import React from "react";
import "./style.css";
import { Container, Form, Button } from "react-bootstrap";
import { useState, useCallback } from "react";
import DatePicker from "react-date-picker";
import axios from "axios";

export function UserForm() {
  var getPack: any;
  if (typeof window.localStorage.getItem("userData") !== undefined) {
    getPack = window.localStorage.getItem("userData") || {};
    // console.log(getPack);
  } else {
    getPack = undefined;
    // console.log(getPack);
  }
  var userData: any;
  if (getPack !== "undefined") userData = JSON.parse(getPack);
  else userData = undefined;
  const [isEdited, setIsEdited] = useState("false");

  if (userData === "undefined") {
    var [fullName, setFullName] = useState("Họ và tên");
    var [phoneNumber, setPhoneNumber] = useState("Số điện thoại");
    var [MSSV, setMSSV] = useState("Mã số sinh viên");
  } else {
    if (userData.firstName === null)
      var [fullName, setFullName] = useState("Họ và tên");
    else
      var [fullName, setFullName] = useState(
        userData.lastName + " " + userData.firstName
      );
    if (userData.mobile === null)
      var [phoneNumber, setPhoneNumber] = useState("Số điện thoại");
    else var [phoneNumber, setPhoneNumber] = useState("" + userData.mobile);
    if (userData.studentId === null)
      var [MSSV, setMSSV] = useState("Mã số sinh viên");
    else var [MSSV, setMSSV] = useState("" + userData.studentId);
  }
  const checkEdit = () => {
    setIsEdited("true");
    console.log("click edit");
  };
  if (typeof window.localStorage.getItem("userData") !== undefined)
    if (userData !== "undefined")
      var userInfo: any = {
        userId: userData.userId,
        fullName: fullName,
        phoneNumber: phoneNumber,
        studentId: MSSV,
      };

  const checkSave = useCallback(() => {
    setIsEdited("false");
    console.log("click save");
    // window.localStorage.setItem("userName",userInfo)
    axios
      .post("https://uitcanteen-backend.herokuapp.com/updateuser", userInfo)
      .then((response) => {
        console.log(response.data);
      });
      // console.log("check userData from userForm",userData.userId)
  }, [fullName, phoneNumber, MSSV]);

  const editName = (currentTargetvalue: any) => {
    setFullName(currentTargetvalue);
    console.log(currentTargetvalue);
  };
  const editPhone = (currentTargetvalue: any) => {
    setPhoneNumber(currentTargetvalue);
    console.log(currentTargetvalue);
  };
  const editMSSV = (currentTargetvalue: any) => {
    setMSSV(currentTargetvalue);
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
            <Form.Control className="formControl" placeholder={MSSV} disabled />
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
              // type="date"
              className="formControl"
              placeholder={MSSV}
              // min="01-01-1900"
              // max="31-12-2100"
              // data-date-format="dd/mm/yyyy"
              onChange={(e: any) => editMSSV(e.target.value)}
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
