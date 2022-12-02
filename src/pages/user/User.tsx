import React from "react";
import { Container, Form } from "react-bootstrap";
import { UserForm } from "../../component/userForm/userForm";
import "./style.css"

// const handleChange = (e, value) => {
//   // setState({ firstName: value });
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   // console.log(state.firstName);
// };
export function User() {
  return (
    <>
      <Container className="container_User">
        <h1>Hồ sơ người dùng</h1>
        <UserForm />
      </Container>
    </>
  );
}
