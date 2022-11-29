import {
  Button,
  Container,
  Nav,
  Navbar as NavbarBs,
  NavItem,
  Dropdown,
  Form,
} from "react-bootstrap";
// import Image from 'react-bootstrap/Image'
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../../context/shoppingCartContext";
import { useRef, useState } from "react";
import "./style.css";
import axios, { Axios } from "axios";

export function HeaderLogin() {
  const { openPayCart, openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="headerSpace">
      <Container>
        <div className="containerHeader_Name">
          <Nav>
            <Nav.Link href="/#home" /* as={NavLink} */>
              <img
                alt=""
                src="../imgs/logouit-1@2x.png"
                className="CanteenUIT_header_icon"
              />
              <span className="CanteenUIT_header_text">Canteen UIT</span>
            </Nav.Link>
          </Nav>
        </div>

        <div className="nav_link">
          <Nav>
            <Nav.Link to="/" as={NavLink}>
              Trang chủ
            </Nav.Link>
            <Nav.Link to="Menu" as={NavLink}>
              Thực đơn
            </Nav.Link>
            <Nav.Link to="/History" as={NavLink}>
              Lịch sử
            </Nav.Link>
            <Nav.Link to="/About" as={NavLink}>
              Liên hệ
            </Nav.Link>
          </Nav>
        </div>

        <div className="shoppingCartIcon">
          <div
            style={{ position: "relative" }}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              alt=""
              src="../svg/shopping-cart.svg"
              style={{
                width: "2.5rem",
              }}
              onClick={openCart}
              className="shoppingCartpage"
            />
            {cartQuantity > 0 && (
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.25rem",
                  height: "1.25rem",
                  position: "absolute",
                  transform: "translate(75%,-60%)",
                }}
              >
                {cartQuantity}
              </div>
            )}
          </div>
        </div>
        <div>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-autoclose-true"
                className="chicken_button rounded-circle"
              >
                <img
                  alt=""
                  src="../svg/chicken_ava.svg"
                  className="chicken_ava"
                />{" "}
              </Dropdown.Toggle>{" "}
              <Dropdown.Menu className="dropdownMenu">
                <Dropdown.Header className="user_Name">
                  User_Name
                </Dropdown.Header>
                <Dropdown.Divider className="dropdownMenu" />
                <Dropdown.Item className="dropdownItem">
                  <Nav.Link
                    to="/User"
                    as={NavLink}
                    className="d-flex flex-row dropdownItem"
                  >
                    Hồ Sơ
                    <img
                      alt=""
                      src="../svg/edit-settings.svg"
                      className="imgDropdown"
                    />
                  </Nav.Link>
                </Dropdown.Item>
                <Dropdown.Item className="dropdownItem">
                  <Nav.Link to="/Logout" as={NavLink} className="dropdownItem">
                    Đăng xuất
                    <img
                      alt=""
                      src="../svg/log-out.svg"
                      className="imgDropdown"
                    />
                  </Nav.Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </NavbarBs>
  );
}
